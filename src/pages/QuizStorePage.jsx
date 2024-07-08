import SplitScreen from '../layouts/SplitScreen';
import QuizStoreRight from '../features/quizStore/components/QuizStoreRight';
import useAdmin from '../hooks/useAdmin';
import QuizStoreLeft from '../features/quizStore/components/QuizStoreLeft';

export default function QuizStorePage() {
  const { topics, questions } = useAdmin()
  return (
    <div className='w-[65%] mx-auto'>
      <SplitScreen>
        <QuizStoreLeft questions={questions} topics={topics} />
        <QuizStoreRight questions={questions} topics={topics} />
      </SplitScreen>
    </div>
  );
}
