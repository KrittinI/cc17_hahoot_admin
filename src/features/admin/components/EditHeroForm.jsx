import { useRef, useState } from 'react';
import QuizItem from '../../../components/QuizItem';

export default function EditHeroForm({
  handleSave,
  dataContent,
  setSelectContent,
}) {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(dataContent.image);
  const [title, setTitle] = useState(dataContent.title);
  const [description, setDescription] = useState(dataContent.detail);
  const [quizDetail, setQuizDetail] = useState([
    dataContent.quiz1,
    dataContent.quiz2,
    dataContent.quiz3,
    dataContent.quiz4,
  ]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setSelectContent((prev) => ({ ...prev, image: imageUrl }));
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
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='bg-white border border-[#86868b] rounded-xl w-full p-2'
            />
            <input
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type='text'
              className='bg-white border border-[#86868b] rounded-xl w-full h-full p-2'
            />
          </div>
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        <div className='flex flex-col gap-2 font-bold px-4'>
          <div className='text-3xl'>My Quiz</div>
          <hr className='border border-gray' />
        </div>
        <div>
          <QuizItem
            quizDetail={quizDetail}
            setQuizDetail={setQuizDetail}
            dropdownOption={[
              dataContent.quiz1,
              dataContent.quiz2,
              dataContent.quiz3,
              dataContent.quiz4,
            ]}
          />
        </div>
      </div>

      <br />

      <div className='flex gap-4 justify-start'>
        <button
          className='bg-black p-2 rounded-lg w-[250px] text-white'
          onClick={handleSave}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}
