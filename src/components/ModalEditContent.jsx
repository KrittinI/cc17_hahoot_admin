import { useRef } from 'react';
import defaultImage from '../assets/hh-hero.png';
import { useState } from 'react';
import QuizItem from './QuizItem';

export default function ModalEditContent({
  setSelectedQuizDetail,
  onSave,
  quizDetail,
}) {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-5 '>
        <div className='w-full h-full bg-[#F8FAFF] p-4 rounded-2xl flex gap-6'>
          <img
            src={imageUrl}
            onClick={handleImageClick}
            className='h-[300px] rounded-xl hover:cursor-pointer'
            alt='Selected'
          />

          <div className='flex flex-col gap-3  w-full'>
            <input
              placeholder='TitleContent'
              type='text'
              className='bg-white border border-[#86868b] rounded-xl w-full p-2'
            />
            <input
              placeholder='Description'
              type='text'
              className='bg-white border border-[#86868b] rounded-xl w-full h-full p-2'
              // value={message.detail}
            />
          </div>
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {/* <br /> */}
          {/* <div className='flex justify-between gap-8'>
            <div className='w-1/2'>
              <h1>Date</h1>
              <input
                type='datetime-local'
                name='Date'
                id=''
                className='bg-white border border-[#86868b] rounded-xl w-full'
              ></input>
            </div>
          </div> */}
        </div>
        <div className='flex flex-col gap-2 font-bold px-4'>
          <div className='text-3xl'>My Quiz</div>
          <hr className='border border-gray' />
        </div>
        <div className='flex gap-8  px-4 '>
          <QuizItem
            setSelectedQuizDetail={setSelectedQuizDetail}
            quizDetail={quizDetail}
          />
        </div>
      </div>

      <br />

      <div className='flex gap-4 justify-start'>
        <button
          className='bg-black p-2 rounded-lg w-[250px] text-white'
          onClick={onSave}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}
