// import { useState } from 'react';
import { useState } from 'react';

export default function QuizItem({ selectedHero, setQuizDetail }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleImageClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className='flex flex-col gap-4'>
      {selectedHero.map((item, index) => (
        <div
          key={index}
          className='relative rounded-[8px] w-[300px] h-[80px] px-2 bg-gray-300 flex gap-2 items-center justify-center'
          onClick={() => handleImageClick(index)}
        >
          <div className='w-[100px] h-[60px] flex justify-center relative'>
            <img
              src={item?.image}
              alt='No Image'
              className='w-full rounded-[8px] h-full'
            />
          </div>

          <div className=' h-2/6 px-2'>{item?.topic}</div>
        </div>
      ))}
    </div>
  );
}
