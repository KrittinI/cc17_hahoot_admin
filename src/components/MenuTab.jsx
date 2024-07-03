import Button from './Button';

export default function MenuTab({ tab, onClick }) {
  return (
    <Button bg={`white`} onClick={onClick} width={60}>
      <div className='flex justify-between items-center gap-2'>
        <div className='w-[64px] h-[64px]'>{tab?.icon}</div>
        <div className='flex-1 flex flex-col items-start gap-1 md:visible sm:invisible'>
          <div className=' text-[#718EBF] text-lg '>{tab?.name}</div>
          <div className=' text-[#232323] text-xl'>{tab?.number}</div>
        </div>
      </div>
    </Button>
  );
}
