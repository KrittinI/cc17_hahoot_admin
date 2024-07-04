import { useRef, useState } from 'react';
import QuizItem from '../../../components/QuizItem';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';

const initialInput = {
  title: '',
  description: '',
  quiz1: 0,
  quiz2: 0,
  quiz3: 0,
  quiz4: 0,
}

export default function CreateHeroForm({
  handleSave,
  onCancel,
}) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [input, setInput] = useState(initialInput);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className=''>
      <div className=''>
        <div className='w-[832px] h-[360px] bg-[#F8FAFF] gap-4 p-4 rounded-2xl grid grid-cols-5 '>
          <div
            role='button'
            className='col-span-2 h-full bg-red flex justify-center items-center rounded-xl'
            onClick={handleImageClick}
          >
            {file ? <img
              src={URL.createObjectURL(file)}
              className=''
              alt='Selected'
            />
              : <h1>Add image</h1>
            }
          </div>
          <div className='flex flex-col justify-between gap-3 col-span-3'>
            <Input
              name="title"
              placeholder='Title'
              value={input?.title}
              onChange={handleChangeInput}
            />
            <TextArea
              name="description"
              placeholder='Description'
              value={input?.description}
              onChange={handleChangeInput}
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
          {/* <QuizItem
            quizDetail={quizDetail}
            setQuizDetail={setQuizDetail}
            dropdownOption={[
              dataContent.quiz1,
              dataContent.quiz2,
              dataContent.quiz3,
              dataContent.quiz4,
            ]}
          /> */}
        </div>
      </div >
      <div className='flex gap-4 justify-around '>
        <Button
          bg={`green`}
          color={`white`}
          width={60}
          onClick={handleSave}
        >
          SAVE
        </Button>
        <Button
          bg={`black`}
          width={60}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </div >
  );
}
