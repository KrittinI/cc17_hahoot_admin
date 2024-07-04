import DoughnutChart from '../components/DoughnutChart';
import Table from '../components/Table';
import AdminSideBar from '../features/admin/components/AdminSideBar';
import SplitScreen from '../layouts/SplitScreen';

export default function QuizStorePage() {
  const quizTable = [
    { title: 'Title', colSpan: 6 },
    { title: 'Topic', colSpan: 4 },
  ];

  const dataQuizTable = [
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
    {
      detail1: 'Spotify Subscription',
      detail2: 'ssSpotify@gmail.com',
      detail3: '100',
      detail4: '500',
    },
  ];

  return (
    <div>
      <div className='flex w-[65%] mx-auto'>
        <SplitScreen>
          <Table title={`Quesitons`} header={quizTable} data={dataQuizTable} />
          <div className='flex flex-col gap-2'>
            <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
              <h1 className='text-[#343C6A] w-full text-base'> Questions Statistics</h1>
              <DoughnutChart />
            </div>
            <AdminSideBar />
          </div>
        </SplitScreen>
      </div>
    </div>
  );
}
