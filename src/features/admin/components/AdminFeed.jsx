import BarChart from '../../../components/BarChart';
import DoughnutChart from '../../../components/DoughnutChart';
import HeroBox from './HeroBox';

export default function AdminFeed() {
  return (
    <div className='grid grid-cols-3 gap-x-2 gap-y-4 pt-8'>
      <div className='bg-white rounded-xl col-span-2 flex flex-col gap-2 p-4'>
        <h1 className='text-font-title'>Total</h1>
        <BarChart />
      </div>
      <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
        <h1 className='text-font-title'> Topic Lists</h1>
        <DoughnutChart />
      </div>
      <div className='col-span-3'>
        <HeroBox />
      </div>
    </div>
  );
}
