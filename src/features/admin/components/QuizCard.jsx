
export default function QuizCard({ saveQuizDetail }) {
  return (
    <div className='flex item-center gap-4 p-2 border rounded-lg shadow-xl'>
      <div className='flex w-[100px] h-[60px] items-center justify-center '>
        <img src={saveQuizDetail?.image} alt='No image' className='rounded-md' />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='text-font-title-card'>{saveQuizDetail?.topic}</div>
        <div className='text-font-body text-[#718EBF]'>{saveQuizDetail?.name}</div>
      </div>
    </div>
  );
}
