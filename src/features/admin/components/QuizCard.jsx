import imageQuiz from "../../../assets/editIcon.png";
export default function QuizCard({ saveQuizDetail }) {
  return (
    <div className='flex item-center gap-4 p-2 border rounded-lg shadow-xl '>
      <div className='flex max-w-[100px] max-h-[60px] items-center justify-center self-center'>
        <img src={saveQuizDetail?.questionPicture || imageQuiz} alt='No image' className='rounded-md' />
      </div>
      <div className='text-font-title-card'>{saveQuizDetail?.question}</div>
    </div>
  );
}
