import { useState } from 'react';

export default function QuizCreateSpare({ heroContent }) {
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
      )}
    </>
  );
}

// import { useState } from 'react';
// import { CiCirclePlus } from 'react-icons/ci';

// export default function QuizCreate({ heroContent }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectQuiz, setSelectQuiz] = useState(null);

//   const handleClick = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   const handleSelectQuiz = (quiz) => {
//     setSelectQuiz(quiz);
//     setDropdownOpen(null);
//   };

//   const handleReSelect = () => {
//     setSelectQuiz(null);
//     setDropdownOpen(true);
//   };

//   const quizTopics = Object.keys(heroContent)
//     .filter((key) => key.startsWith('quiz'))
//     .map((key) => heroContent[key]);

//   return (
//     <div className='relative flex flex-col gap-4'>
//       {!selectQuiz && (
//         <div className='relative'>
//           <div
//             className='rounded-[8px] w-[250px] h-[80px] px-2 bg-gray-300 flex gap-2 items-center justify-center hover:cursor-pointer'
//             onClick={handleClick}
//           >
//             <CiCirclePlus className='w-[50px] h-[50px] text-gray-500' />
//             Add Quiz
//           </div>
//           {dropdownOpen && (
//             <div className='absolute z-30 top-5 left-[100px] mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
//               {quizTopics.map((quiz, quizIndex) => (
//                 <div
//                   key={quizIndex}
//                   className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
//                   onClick={() => handleSelectQuiz(quiz)}
//                 >
//                   {quiz.topic}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//       {selectQuiz && (
//         <div
//           className='rounded-[8px] w-[250px] h-[80px] px-2 bg-gray-300 flex gap-2 items-center justify-center hover:cursor-pointer'
//           onClick={handleReSelect}
//         >
//           <div className='w-[100px] h-[60px] flex justify-center'>
//             <img src={selectedQuiz.image} alt='Quiz' className='rounded-xl' />
//           </div>
//           <div className='flex flex-col justify-center'>
//             <div className='text-[16px]'>{selectedQuiz.topic}</div>
//             <div className='text-[15px] text-[#718EBF]'>
//               {selectedQuiz.name}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
