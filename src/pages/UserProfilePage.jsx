import DoughnutChart from '../components/DoughnutChart';
import Table from '../components/Table';
import AdminSideBar from '../features/admin/components/AdminSideBar';
import SplitScreen from '../layouts/SplitScreen';

export default function UserProfilePage() {
  const userTable = [
    { title: 'Username', colSpan: 2, name: 'username' },
    { title: 'E-Mail', colSpan: 2, name: 'email' },
    { title: 'Event list', colSpan: 2, name: 'events' },
    { title: 'Quiz list', colSpan: 2, name: 'questions' },
    { title: 'Status', colSpan: 2, name: 'isActive' },
  ];
  const dataUserTable = [
    {
      detail1: 'Spotify Subscription1',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Cpotify Subscription2',
      detail2: 'assSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Apotify Subscription3',
      detail2: 'dssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'InActive',
    },
    {
      detail1: 'Rpotify Subscription4',
      detail2: 'fssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Bpotify Subscription5',
      detail2: 'gssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'InActive',
    },
    {
      detail1: 'Zpotify Subscription6',
      detail2: 'hssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Wpotify Subscription7',
      detail2: 'jssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'InActive',
    },
    {
      detail1: 'Spotify Subscription8',
      detail2: 'kssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Spotify Subscription9',
      detail2: 'lssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Spotify Subscription10',
      detail2: 'nssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
  ];
  return (
    <>
      <div className='flex w-[65%] mx-auto'>
        <SplitScreen>
          <Table title={`Users`} header={userTable} data={dataUserTable} />
          <div className='flex flex-col gap-2'>
            <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
              <h1 className='text-[#343C6A] w-full text-base'>
                {' '}
                Users Statistics
              </h1>
              <DoughnutChart />
            </div>
            <AdminSideBar />
          </div>
        </SplitScreen>
      </div>
    </>
  );
}
