import ActivityCard from '../components/ActivityCard';
import ContentCard from '../components/ContentCard';
import QuizCard from '../components/QuizCard';
import StatisticCard from '../components/StatisticCard';
import AllQuizCard from './AllQuizCard';

export default function AdminFeed() {
  return (
    <div className='flex flex-col px-20 py-8'>
      <div className='flex flex-wrap'>
        <div className='border border-yellow w-2/3 p-8 flex flex-col'>
          <h1 className='text-[#343C6A] text-base'>Total Activity </h1>
          <br />
          <ActivityCard />
        </div>
        <div className='border border-yellow w-1/3 p-8 flex flex-col'>
          <h1 className='text-[#343C6A] text-base'> Expense Statistics</h1>
          <br />
          <StatisticCard />
        </div>
      </div>
      <AllQuizCard />
    </div>
  );
}
