import { Routes, Route } from 'react-router-dom';
import ListDokumenDireksi from './admin/dokumen/ListDokumen';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/akta" element={<ListDokumenDireksi />} />
    </Routes>
  );
}
