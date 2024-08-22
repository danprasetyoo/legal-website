import { Routes, Route } from 'react-router-dom';
import LoginView from './admin/login/LoginView';
import ListDokumenDireksi from './admin/dokumen/ListDokumen';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<LoginView />} />
      <Route path="/admin/akta" element={<ListDokumenDireksi />} />
    </Routes>
  );
}
