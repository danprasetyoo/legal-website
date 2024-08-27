import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Carousel from './carousel/Carousel';

export function ClientView() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
}
