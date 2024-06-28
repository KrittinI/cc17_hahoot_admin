import { Link } from 'react-router-dom';

export default function MenuTab({
  tabLink,
  tabIcon,
  tabName,
  tabNumber,
  onClick,
}) {
  return (
    <Link to={tabLink}>
      <button
        className='bg-white rounded-3xl p-2 w-64 h-32 flex hover:bg-gray-100'
        onClick={onClick}
      >
        <div className='bg-orange-200 w-full h-full'>{tabIcon}</div>
        <div className='w-full h-full flex flex-col justify-center gap-1'>
          <div className=' text-[#718EBF] text-base flex justify-start'>
            {tabName}
          </div>
          <div className=' text-[#232323] text-xl flex justify-start'>
            {tabNumber}
          </div>
        </div>
      </button>
    </Link>
  );
}
