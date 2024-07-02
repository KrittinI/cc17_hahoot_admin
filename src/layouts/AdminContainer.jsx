import { Outlet } from 'react-router-dom';
import AdminMenu from './AdminMenu';

export default function AdminContainer() {
  return (
    <div>
      <AdminMenu />
      <Outlet />
    </div>
  );
}
