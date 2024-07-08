import SplitScreen from '../layouts/SplitScreen';
import RoomRight from '../features/rooms/components/RoomRight';
import RoomLeft from '../features/rooms/components/RoomLeft';
import useAdmin from '../hooks/useAdmin';
// const roomsTable = [
//   { title: 'Username', colSpan: 2, name: 'username' },
//   { title: 'E-Mail', colSpan: 2, name: 'email' },
//   { title: 'Event list', colSpan: 2, name: 'events' },
//   { title: 'Quiz list', colSpan: 2, name: 'questions' },
//   { title: 'Status', colSpan: 2, name: 'isActive' },
// ];
// const dataRoomTable = [
//   {
//     detail1: 'Spotify Subscription1',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'Active',
//   },
//   {
//     detail1: 'Spotify Subscription2',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'Active',
//   },
//   {
//     detail1: 'Spotify Subscription3',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'InActive',
//   },
//   {
//     detail1: 'Spotify Subscription4',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'Active',
//   },
//   {
//     detail1: 'Spotify Subscription5',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'InActive',
//   },
//   {
//     detail1: 'Spotify Subscription6',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'Active',
//   },
//   {
//     detail1: 'Spotify Subscription7',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'InActive',
//   },
//   {
//     detail1: 'Spotify Subscription8',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'Active',
//   },
//   {
//     detail1: 'Spotify Subscription9',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'Active',
//   },
//   {
//     detail1: 'Spotify Subscription10',
//     detail2: 'ssSpotify@gmail.com',
//     detail3: '100',
//     detail4: '500',
//     detail5: 'Active',
//   },
// ];

export default function RoomPage() {
  const { topics, rooms } = useAdmin();
  return (
    <>
      <div className='w-[65%] mx-auto'>
        <SplitScreen>
          <RoomLeft rooms={rooms} topics={topics} />
          <RoomRight rooms={rooms} topics={topics} />
        </SplitScreen>
      </div>
    </>
  );
}
