import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdminMenu from '../features/admin/components/AdminMenu';

export default function MainContainer() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');
  return (
    <div>
      <Header />
      {isAdminPath && <AdminMenu />}
      <Outlet />
      <Footer />
    </div>
  );
}
