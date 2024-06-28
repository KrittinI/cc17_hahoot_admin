import ButtonAdmin from './ButtonAdmin';
import Title from './Title';

export default function QuizCard() {
  return (
    <div className='bg-white p-8 rounded-3xl flex flex-col gap-2'>
      <Title />
      <Title />
      <Title />
      <Title />
      <div className='flex justify-end'>
        <ButtonAdmin width='w-[123px]'>Save</ButtonAdmin>
      </div>
    </div>
  );
}
