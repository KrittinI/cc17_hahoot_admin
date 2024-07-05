
export default function QuizCard({ saveQuizDetail }) {
  return (
    <div className='flex gap-3 align-center pt-3'>
      <div className='w-[100px] h-[60px] p-2 '>
        <img src={saveQuizDetail?.image} alt='No image' className='rounded-lg' />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='text-font-title-card'>{saveQuizDetail?.topic}</div>
        <div className='text-font-body text-[#718EBF]'>{saveQuizDetail?.name}</div>
      </div>
    </div>
  );
}
