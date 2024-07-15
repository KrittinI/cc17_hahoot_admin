import DoughnutChart from '../../../components/DoughnutChart';
import QuizSideBar from './QuizSideBar';

export default function QuizStoreRight({ lables, amount, onClick, selected }) {
  return (
    <div className='flex flex-col gap-2 sticky top-20'>
      <div className='bg-white rounded-xl col-span-1 flex flex-col gap-4 p-6 justify-between'>
        <h1 className='text-[#343C6A] w-full text-font-title'>
          Questions Statistics
        </h1>
        <DoughnutChart amount={amount} lables={lables} />
      </div>
      <QuizSideBar onClick={onClick} selected={selected} />
    </div>
  );
}
