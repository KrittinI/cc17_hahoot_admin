import Table from '../components/Table';
import AdminSideBar from '../layouts/AdminSideBar';
import SplitScreen from '../layouts/SplitScreen';

export default function EventListPage() {
  const eventTable = [
    { title: 'Title', colSpan: 3 },
    { title: 'Create by', colSpan: 3 },
    { title: 'Topic', colSpan: 2 },
    { title: 'Quiz list', colSpan: 2 },
  ];
  const dataEventTable = [
    {
      detail1: 'BlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'BlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'BlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'BlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'BlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'BlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'BlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'Spotify Subscription',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'Spotify Subscription',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'Spotify Subscription',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
    },
  ];
  return (
    <div className='flex w-[65%] mx-auto'>
      <SplitScreen>
        <Table title={`Events`} header={eventTable} data={dataEventTable} />
        <AdminSideBar />
      </SplitScreen>
    </div>
  );
}
