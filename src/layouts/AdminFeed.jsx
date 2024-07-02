import ActivityCard from '../components/ActivityCard';
import StatisticCard from '../components/StatisticCard';
import AllQuizCard from './AllQuizCard';

export default function AdminFeed() {
  return (
    <div className='grid grid-cols-3 gap-x-2 gap-y-4'>
      <div className='bg-white rounded-xl col-span-2 flex flex-col gap-2 p-4'>
        <h1 className='text-[#343C6A] w-full text-base'>Total</h1>
        <ActivityCard />
      </div>
      <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
        <h1 className='text-[#343C6A] w-full text-base'> Expense Statistics</h1>
        <StatisticCard />
      </div>
      <div className='col-span-3'>
        <AllQuizCard />
      </div>
    </div>
  );
}
