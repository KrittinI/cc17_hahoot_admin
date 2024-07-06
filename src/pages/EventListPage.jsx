import DoughnutChart from '../components/DoughnutChart';
import Table from '../components/Table';
import AdminSideBar from '../features/admin/components/AdminSideBar';
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
      detail1: 'aBlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'xBlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'cBlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'vBlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'bBlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'nBlackBean Subscription',
      detail2: 'ssBlackBean@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'iSpotify Subscription',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
    },
    {
      detail1: 'uSpotify Subscription',
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
        <div className='flex flex-col gap-2'>
          <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
            <h1 className='text-[#343C6A] w-full text-base'>
              {' '}
              Events Statistics
            </h1>
            <DoughnutChart />
          </div>
          <AdminSideBar />
        </div>
      </SplitScreen>
    </div>
  );
}
