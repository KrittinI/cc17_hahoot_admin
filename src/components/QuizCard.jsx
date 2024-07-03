import Title from './Title';

export default function QuizCard({ selectedQuizDetail }) {
  return (
    <>
      <h1 className='text-[#343C6A] text-[22px]'>Free Quiz Card</h1>
      <div className='bg-white rounded-tr-3xl p-8 flex flex-col gap-4 h-full'>
        <Title selectedQuizDetail={selectedQuizDetail} />
      </div>
    </>
  );
}
