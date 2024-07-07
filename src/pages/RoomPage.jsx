import AdminSideBar from '../features/admin/components/AdminSideBar';
import Table from '../components/Table';
import SplitScreen from '../layouts/SplitScreen';
import DoughnutChart from '../components/DoughnutChart';
import RowTableRooms from '../features/admin/components/RowTableRooms';
const roomsTable = [
  { title: 'Username', colSpan: 2, name: 'username' },
  { title: 'E-Mail', colSpan: 2, name: 'email' },
  { title: 'Event list', colSpan: 2, name: 'events' },
  { title: 'Quiz list', colSpan: 2, name: 'questions' },
  { title: 'Status', colSpan: 2, name: 'isActive' },
];
const dataRoomTable = [
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
      <div className='flex w-[65%] mx-auto'>
        <SplitScreen>
          <Table title={`Rooms`} header={roomsTable} data={dataRoomTable}>
            {dataRoomTable.map((room, index) =>
              <RowTableRooms key={index} item={room} />
            )}
          </Table>
          <div className='flex flex-col gap-2'>
            <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
              <h1 className='text-[#343C6A] w-full text-base'> Rooms Statistics</h1>
              <DoughnutChart />
            </div>
            <AdminSideBar />
          </div>
        </SplitScreen>
      </div>
    </>
  );
}
