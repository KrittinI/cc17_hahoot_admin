import DoughnutChart from '../components/DoughnutChart';
import Table from '../components/Table';
import AdminSideBar from '../features/admin/components/AdminSideBar';
import SplitScreen from '../layouts/SplitScreen';

export default function QuizStorePage() {
  const quizTable = [
    { title: 'No.', colSpan: 1, name: "no" },
    { title: 'Title', colSpan: 2, name: "title" },
    { title: 'Topic', colSpan: 1, name: "topic" },
    { title: 'Create By', colSpan: 1, name: "createBy" },
    { title: 'Status', colSpan: 1, name: "status" },
    { title: 'Action', colSpan: 1, name: "action" },
  ];

  const dataQuizTable = [
    {
      detail1: '1',
      detail2: 'ssSpotify@gmail.com',
      detail3: "Mathematics",
      detail4: "Username",
      detail5: "Private",
    },
    {
      detail1: '2',
      detail2: 'ssSpotify@gmail.com',
      detail3: "Mathematics",
      detail4: "Username",
      detail5: "Private"
    },
    {
      detail1: '3',
      detail2: 'ssSpotify@gmail.com',
      detail3: "Mathematics",
      detail4: "Username",
      detail5: "Public"
    },
    {
      detail1: '4',
      detail2: 'ssSpotify@gmail.com',
      detail3: "Mathematics",
      detail4: "Username",
      detail5: "Private"
    },
    {
      detail1: '5',
      detail2: 'ssSpotify@gmail.com',
      detail3: "Mathematics",
      detail4: "Username",
      detail5: "Public"
    },
    {
      detail1: '6',
      detail2: 'ssSpotify@gmail.com',
      detail3: "Mathematics",
      detail4: "Username",
      detail5: "Private"
    },
  ];
  const lables = ["active", "inactive", "topic"];
  const amount = [300, 200, 100];
  return (
    <div>
      <div className='w-[65%] mx-auto'>
        <SplitScreen>
          <Table title={`Quesitons`} header={quizTable} data={dataQuizTable} gridCols={'7'} />
          <div className='flex flex-col gap-2'>
            <div className='bg-white rounded-xl col-span-1 flex flex-col gap-4 p-6 justify-between'>
              <h1 className='text-[#343C6A] w-full text-font-title'> Questions Statistics</h1>
              <DoughnutChart amount={amount} lables={lables} />
            </div>
            <AdminSideBar />
          </div>
        </SplitScreen>
      </div>
    </div>
  );
}
