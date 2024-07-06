// import { useState } from 'react';
import { useState } from 'react';

export default function QuizItem({ selectedHero }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleImageClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  if (!selectedHero) {
    return null;
  }

  const quizDetails = [
    selectedHero.question1,
    selectedHero.question2,
    selectedHero.question3,
    selectedHero.question4,
  ];

  return (
    <div className='flex flex-col gap-4'>
      {quizDetails.map((item, index) => (
        <div
          key={index}
          className='relative rounded-[8px] w-[300px] h-[80px] px-2 bg-gray-300 flex gap-2 items-center justify-center'
          onClick={() => handleImageClick(index)}
        >
          <div className='w-[100px] h-[60px] flex justify-center relative'>
            <img
              src={item?.questionPicture}
              alt='No Image'
              className='w-full rounded-[8px] h-full'
            />
          </div>

          <div className=' px-2 text-sm bg-green overflow-visible whitespace-normal'>
            {item?.question}
          </div>
        </div>
      ))}
    </div>
  );
}
