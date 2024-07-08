import { useRef, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import SelectedQuestion from './SelectedQuestion';
import adminApi from '../../../api/admin';

const initialInput = {
  title: '',
  description: '',
  quiz1: 0,
  quiz2: 0,
  quiz3: 0,
  quiz4: 0,
  eventPicture: ''
};

export default function CreateHeroForm({ setHeroContent, onSuccess, questions }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [input, setInput] = useState(initialInput);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleClickSave = async () => {
    try {
      console.log(input);
      const formData = new FormData()
      formData.append("eventPicture", file)
      formData.append("hero", JSON.stringify(input))
      console.log(...formData);
      const res = await adminApi.createHero(formData)
      console.log(res);
      setHeroContent({ ...input, eventPicture: URL.createObjectURL(file) })
      onSuccess()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-6'>
        <div className='w-[832px] h-[360px] bg-[#F8FAFF] gap-4 p-4 rounded-2xl grid grid-cols-5 '>
          <div
            role='button'
            className='col-span-2 h-full bg-red flex justify-center items-center rounded-xl'
            onClick={handleImageClick}
          >
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                className=''
                alt='Selected'
              />
            ) : (
              <h1>Add image</h1>
            )}
          </div>
          <div className='flex flex-col justify-between gap-3 col-span-3'>
            <Input
              name='title'
              placeholder='Title'
              value={input?.title}
              onChange={handleChangeInput}
            />
            <TextArea
              name='description'
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
        <div className='bg-[#F8FAFF] max-w-[400px] p-4 rounded-2xl flex flex-col gap-2'>
          <div className='text-2xl'>My Quiz</div>
          <SelectedQuestion questions={questions} onChange={handleChangeInput} name={`quiz1`} value={input.quiz1} />
          <SelectedQuestion questions={questions} onChange={handleChangeInput} name={`quiz2`} value={input.quiz2} />
          <SelectedQuestion questions={questions} onChange={handleChangeInput} name={`quiz3`} value={input.quiz3} />
          <SelectedQuestion questions={questions} onChange={handleChangeInput} name={`quiz4`} value={input.quiz4} />
        </div>
      </div>
      <div className='flex gap-4 justify-around '>
        <Button bg={`green`} color={`white`} width={60} onClick={handleClickSave}>
          SAVE
        </Button>
        <Button bg={`black`} width={60} onClick={onSuccess}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
