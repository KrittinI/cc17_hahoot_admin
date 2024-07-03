import AdminSideBar from '../layouts/AdminSideBar';
import Table from './Table';
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

export default function RoomPage() {
  return (
    <>
      <div className='flex'>
        <div className='px-5 py-8 border border-yellow w-2/3'>
          <Table title={`Users`} header={userTable} data={dataUserTable} />
        </div>
        <div className='border border-yellow px-3 py-8 mt-[48px] w-1/3'>
          <AdminSideBar />
        </div>
      </div>
    </>
  );
}
