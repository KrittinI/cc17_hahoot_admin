import SplitScreen from '../layouts/SplitScreen';
import QuizStoreRight from '../features/quizStore/components/QuizStoreRight';
import useAdmin from '../hooks/useAdmin';
import QuizStoreLeft from '../features/quizStore/components/QuizStoreLeft';
import { useState } from 'react';

export default function QuizStorePage() {
  const { topics, questions } = useAdmin();
  const mockLables = {};
  const mockAmount = {}
  mockAmount.answer = questions?.reduce(
    (a, c) => {
      switch (c.answer) {
        case 'A':
          a[0]++;
          return a;
        case 'B':
          a[1]++;
          return a;
        case 'C':
          a[2]++;
          return a;
        case 'D':
          a[3]++;
          return a;
      }
    },
    [0, 0, 0, 0]
  );
  mockLables.answer = ['A', 'B', 'C', 'D'];
  mockLables.topic = topics?.map((topic) => topic.topicName);
  const arr = new Array(topics?.length).fill(0);
  mockAmount.topic = questions?.reduce((a, c) => {
    a[c.topicId - 1]++;
    return a;
  }, arr);

  const [dataLables, setDataLabels] = useState(mockLables.topic)
  const [dataAmount, setDataAmount] = useState(mockAmount.topic)
  const [selected, setSelected] = useState("topic")

  const handleSetUserData = (select, labels, amount) => {
    console.log(select);
    console.log(labels);
    console.log(amount);
    setSelected(select)
    setDataLabels(labels)
    setDataAmount(amount)
  }

  const handelSetMenuData = (select) => {
    setSelected(select)
    setDataLabels(mockLables[select])
    setDataAmount(mockAmount[select])
  }

  return (
    <div className='w-[65%] mx-auto'>
      <SplitScreen>
        <QuizStoreLeft questions={questions} topics={topics} onClick={handleSetUserData} selected={selected} />
        <QuizStoreRight questions={questions} lables={dataLables} amount={dataAmount} onClick={handelSetMenuData} selected={selected} />
      </SplitScreen>
    </div>
  );
}
