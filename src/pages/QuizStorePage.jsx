import Table from '../components/Table';
import AdminSideBar from '../layouts/AdminSideBar';
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
          <AdminSideBar />
        </SplitScreen>
      </div>
    </div>
  );
}
