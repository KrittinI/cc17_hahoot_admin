import { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';

export default function QuizCreate({ heroContent }) {
  const [dropdownOpen, setDropdownOpen] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [selectQuiz, setSelectQuiz] = useState([null, null, null, null]);

  const handleClick = (index) => {
    const newDropdownOpen = dropdownOpen.map((open, i) =>
      i === index ? !open : open
    );
    setDropdownOpen(newDropdownOpen);
  };

  const handleSelectQuiz = (quiz, index) => {
    const newSelectQuiz = selectQuiz.map((selected, i) =>
      i === index ? quiz : selected
    );
    setSelectQuiz(newSelectQuiz);
    handleClick(index);
  };

  const quizTopics = Object.keys(heroContent)
    .filter((key) => key.startsWith('quiz'))
    .map((key) => heroContent[key]);

  return (
    <div className='relative flex flex-col gap-4'>
      {selectQuiz.map((selectedQuiz, index) => (
        <div key={index} className='relative'>
          {!selectedQuiz && (
            <div
              className='rounded-[8px] w-[250px] h-[80px] px-2 bg-gray-300 flex gap-2 items-center justify-center hover:cursor-pointer'
              onClick={() => handleClick(index)}
            >
              <CiCirclePlus className='w-[50px] h-[50px] text-gray-500' />
            </div>
          )}
          {dropdownOpen[index] && (
            <div className='absolute z-30 top-5 left-[100px] mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
              {quizTopics.map((quiz, quizIndex) => (
                <div
                  key={quizIndex}
                  className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                  onClick={() => handleSelectQuiz(quiz, index)}
                >
                  {quiz.topic}
                </div>
              ))}
            </div>
          )}
          {selectedQuiz && (
            <div
              className='rounded-[8px] w-[250px] h-[80px] px-2 bg-gray-300 flex gap-2 items-center justify-center hover:cursor-pointer'
              onClick={() => handleSelectQuiz(null, index)}
            >
              <div className='w-[100px] h-[60px] flex justify-center'>
                <img
                  src={selectedQuiz.image}
                  alt='Quiz'
                  className='rounded-xl'
                />
              </div>
              <div className='flex flex-col justify-center'>
                <div className='text-[16px]'>{selectedQuiz.topic}</div>
                <div className='text-[15px] text-[#718EBF]'>
                  {selectedQuiz.name}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
