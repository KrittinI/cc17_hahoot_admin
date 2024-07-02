import Button from "./Button";

export default function MenuTab({ tab, onClick }) {
  return (
    <Button bg={`white`} onClick={onClick}>
      <div className="flex justify-center items-center gap-2">
        <div className='bg-orange-200 w-[64px] h-[64px]'>{tab?.icon}</div>
        <div className=' flex flex-col items-start gap-1 md:visible sm:invisible'>
          <div className=' text-[#718EBF] text-md '>
            {tab?.name}
          </div>
          <div className=' text-[#232323] text-xl'>
            {tab?.number}
          </div>
        </div>
      </div>
    </Button>
  );
}
