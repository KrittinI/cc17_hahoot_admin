import AdminMenu from '../../layouts/AdminMenu';
import AdminSideBar from '../../layouts/AdminSideBar';
import AdminTable from '../../layouts/AdminTable';

export default function UserProfilePage() {
  return (
    <>
      {/* <div>
        <AdminMenu />
      </div> */}

      <div className='flex'>
        <div className='px-20 py-8 border border-yellow w-2/3'>
          <AdminTable />
        </div>
        <div className='border border-yellow px-3 py-8 mt-[48px] w-1/3'>
          <AdminSideBar />
        </div>
      </div>
    </>
  );
}
