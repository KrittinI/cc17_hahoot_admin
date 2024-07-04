import { useState } from 'react';

export default function QuizCreate({ heroContent }) {
  const [select, setSelect] = useState('select');

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const handleSelect = () => {
    setSelect('select');
  };

  const selectQuiz = heroContent[select];

  return (
    <>
      {select === 'select' ? (
        <div className='flex flex-col justify-center'>
          <select
            // ref={selectEl}
            className='border-solid border-2 border-gray  rounded-[8px] w-[250px] h-[80px] p-2 hover:cursor-pointer'
            onChange={handleChange}
          >
            <option value='select'>Please select title</option>
            {Object.keys(heroContent)
              .filter((key) => key.startsWith('quiz'))
              .map((item, index) => (
                <option key={index} value={item}>
                  {heroContent[item].topic}
                </option>
              ))}
          </select>
        </div>
      ) : (
        selectQuiz && (
          <div
            className='rounded-[8px] w-[250px] h-[80px] px-2 bg-gray-300 flex gap-2 items-center hover:cursor-pointer'
            onClick={handleSelect}
          >
            <img
              src={selectQuiz.image}
              alt='No image'
              className='rounded-xl w-[100px] h-[60px] '
            />
            <div className='flex flex-col justify-center'>
              <div className='text-[16px]'>{selectQuiz.topic}</div>
              <div className='text-[15px] text-[#718EBF]'>
                {selectQuiz.name}
              </div>
            </div>
          </div>
        )

        // <div className='flex flex-col justify-center'>
        //   <select
        //     className='border-solid border-2 border-gray  rounded-[8px] w-[250px] h-[80px] p-2'
        //     onChange={handleChange}
        //   >
        //     {Object.keys(heroContent)
        //       .filter((key) => key.startsWith('quiz'))
        //       .map((item, index) => (
        //         <option key={index} value={item}>
        //           {heroContent[item].topic}
        //         </option>
        //       ))}
        //   </select>
        // </div>

        // <div class='custom-select'>
        //   <div class='selected'>Select an option</div>
        //   <div class='options'>
        //     <div class='option'>Option 1</div>
        //     <div class='option'>Option 2</div>
        //     <div class='option'>Option 3</div>
        //   </div>
        // </div>
      )}
    </>
  );
}
