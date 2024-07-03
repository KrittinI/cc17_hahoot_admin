// import { useState } from 'react';
import { useState } from 'react';

import { FaHeart } from 'react-icons/fa6';

export default function QuizItem({
  quizDetail,
  setQuizDetail,
  dropdownOption,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleImageClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleOptionClick = (index, option) => {
    const newQuizDetail = [...quizDetail];
    newQuizDetail[index] = option;
    setQuizDetail(newQuizDetail);
    setOpenDropdown(null);
  };

  return (
    <div className='flex gap-4 px-4'>
      {quizDetail.map((item, index) => (
        <div
          key={index}
          className='relative text-left inline-block cursor-pointer w-[190px] h-[240px] rounded-[8px] shadow-xl'
          onClick={() => handleImageClick(index)}
        >
          <div className=' h-full'>
            <div className='bg-white w-[30px] h-[30px] rounded-full absolute right-2 top-2 flex justify-center items-center text-[#D7D7D7]'>
              <FaHeart />
            </div>
            <img
              src={item.image}
              alt=''
              className=' h-3/6 w-full rounded-t-[8px] '
            />

            <div className=' h-2/6 px-2'>{item.topic}</div>
            <div className='flex p-2 gap-2 '>
              <img
                src={item.profileImage}
                alt=''
                className='w-[30px] rounded-full'
              />
              <div className='text-[#60A5FA]'>{item.name}</div>
            </div>
          </div>
          {openDropdown === index && (
            <div className='absolute z-30 top-5 left-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
              <div className='py-1' role='menu' aria-orientation='vertical'>
                {dropdownOption.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleOptionClick(index, option)}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                  >
                    {option.topic}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
