import Table from '../components/Table';
import AdminSideBar from '../layouts/AdminSideBar';
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
      detail1: 'Spotify Subscription2',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Spotify Subscription3',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'InActive',
    },
    {
      detail1: 'Spotify Subscription4',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Spotify Subscription5',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'InActive',
    },
    {
      detail1: 'Spotify Subscription6',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Spotify Subscription7',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'InActive',
    },
    {
      detail1: 'Spotify Subscription8',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Spotify Subscription9',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
      detail5: 'Active',
    },
    {
      detail1: 'Spotify Subscription10',
      detail2: 'ssSpotify@gmail.com',
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
          <AdminSideBar />
        </SplitScreen>
      </div>
    </>
  );
}
