import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import axios from 'axios';
import useSWR from 'swr';

interface AuthResponseData {
  isAuthenticated: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const fetcher = async (url: string, token: string) => {
  console.log('Fetching URL:', url);
  console.log('Token:', token);

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching authentication status:', error);
    throw new Error('Failed to fetch authentication status');
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const apiUrl = 'http://localhost:5000/admin/status';
  const token = localStorage.getItem('authToken');

  const { data, error, mutate } = useSWR<AuthResponseData>(
    token ? [apiUrl, token] : null, // Pass URL and token as an array
    fetcher,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (data) {
      setIsAuthenticated(data.isAuthenticated);
    } else if (error) {
      setIsAuthenticated(false);
    }
  }, [data, error]);

  const login = async (username: string, password: string): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:5000/admin/login', {
        username,
        password,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        mutate();
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Invalid username or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    mutate();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
