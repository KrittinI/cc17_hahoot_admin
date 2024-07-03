export default function Title({ saveQuizDetail }) {
  return (
    <div>
      {saveQuizDetail.map((item, index) => (
        <div key={index} className='flex gap-4 align-center p-2'>
          <div className='w-[100px] h-[60px] p-2 '>
            <img src={item?.image} alt='No image' className='rounded-xl' />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-[16px]'>{item?.topic}</div>
            <div className='text-[15px] text-[#718EBF]'>{item?.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
