import DoughnutChart from '../components/DoughnutChart';
import Table from '../components/Table';
import AdminSideBar from '../features/admin/components/AdminSideBar';
import SplitScreen from '../layouts/SplitScreen';

export default function UserProfilePage() {
  const userTable = [
    { title: 'No.', colSpan:1, name: 'no'},
    { title: 'Username', colSpan: 1, name: 'username' },
    { title: 'E-Mail', colSpan: 2, name: 'email' },
    { title: 'Event list', colSpan: 1, name: 'events' },
    { title: 'Quiz list', colSpan: 1, name: 'questions' },
    { title: 'Status', colSpan: 1, name: 'isActive' },
  ];
  const dataUserTable = [
    {
      detail1: '1',
      detail2: 'Spotify',
      detail3: 'ssSpotify@gmail.com',
      detail4: '100',
      detail5: '500',
      detail6: 'Active',
    },
    {
      detail1: '2',
      detail2: 'Spotify',
      detail3: 'ssSpotify@gmail.com',
      detail4: '100',
      detail5: '500',
      detail6: 'InActive',
    },
    {
      detail1: '3',
      detail2: 'Spotify',
      detail3: 'ssSpotify@gmail.com',
      detail4: '100',
      detail5: '500',
      detail6: 'InActive',
    },
    {
      detail1: '4',
      detail2: 'Spotify',
      detail3: 'ssSpotify@gmail.com',
      detail4: '100',
      detail5: '500',
      detail6: 'Active',
    },
    {
      detail1: '5',
      detail2: 'Spotify',
      detail3: 'ssSpotify@gmail.com',
      detail4: '100',
      detail5: '500',
      detail6: 'Active',
    },
    {
      detail1: '6',
      detail2: 'Spotify',
      detail3: 'ssSpotify@gmail.com',
      detail4: '100',
      detail5: '500',
      detail6: 'Active',
    },
   
  ];
  return (
    <>
      <div className=' w-[65%] mx-auto'>
        <SplitScreen >
          <Table title={`Users`} header={userTable} data={dataUserTable} />
          <div className='flex flex-col gap-2'>
            <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
              <h1 className='text-[#343C6A] w-full text-base'> Users Statistics</h1>
              <DoughnutChart />
            </div>
            <AdminSideBar />
          </div>
        </SplitScreen>
      </div>
    </>
  );
}
