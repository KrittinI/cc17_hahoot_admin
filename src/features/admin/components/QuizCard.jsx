
export default function QuizCard({ saveQuizDetail }) {
  return (
    <div className='flex gap-4 align-center p-2'>
      <div className='w-[100px] h-[60px] p-2 '>
        <img src={saveQuizDetail?.image} alt='No image' className='rounded-xl' />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='text-[16px]'>{saveQuizDetail?.topic}</div>
        <div className='text-[15px] text-[#718EBF]'>{saveQuizDetail?.name}</div>
      </div>
    </div>
  );
}
