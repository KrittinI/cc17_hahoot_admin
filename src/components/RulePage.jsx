import AdminSideBar from '../layouts/AdminSideBar';
import AdminTable from '../layouts/AdminTable';

export default function RulePage() {
  return (
    <>
      <div className='flex'>
        <div className='px-5 py-8 border border-yellow w-2/3'>
          <AdminTable />
        </div>
        <div className='border border-yellow px-3 py-8 mt-[48px] w-1/3'>
          <AdminSideBar />
        </div>
      </div>
    </>
  );
}
