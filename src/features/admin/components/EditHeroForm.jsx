import { useState } from 'react';
import Button from '../../../components/Button';
import QuizCard from './QuizCard';
import defaultImage from "../../../assets/hh-hero.png";
import adminApi from '../../../api/admin';


export default function EditHeroForm({ setHeroContent, heroContent, heros, onSuccess }) {
  const [selectedHero, setSelectedHero] = useState(heroContent);

  const handleChange = (e) => {
    const heroId = e.target.value;
    const hero = heros.find((h) => h.id === parseInt(heroId));
    setSelectedHero(hero);
  };

  const handleClickSave = async () => {
    try {
      await adminApi.updateHero(selectedHero.id)
      setHeroContent(selectedHero)
      onSuccess()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='flex gap-4 w-[1080px]'>
        <div className='w-[60%] h-[360px] bg-[#F8FAFF] gap-4 p-4 rounded-2xl flex'>
          <div className='max-w-[40%] flex items-center'>
            <img
              src={selectedHero?.eventPicture || defaultImage}
              alt='No Image'
              className='bg-red max-w-full max-h-full rounded-2xl'
            />
          </div>
          <div className='flex flex-col gap-4 max-w-[60%]'>
            <select
              className='bg-white border border-[#86868b] rounded-[8px] h-[40px] p-2 hover:cursor-pointer'
              onChange={handleChange}
              value={selectedHero?.id}
            >
              <option value='' disabled className='full'>Please select title</option>
              {heros.map((hero) => (
                <option key={hero.id} value={hero.id}>
                  {hero.title}
                </option>
              ))}
            </select>
            <h1 className='bg-white border border-[#86868b] max-w-full rounded-xl h-full overflow-auto p-4'>
              {selectedHero.detail}
            </h1>
          </div>

        </div >
        <div className='bg-[#F8FAFF] w-[40%] p-4 rounded-2xl flex flex-col gap-2'>
          <div className='text-2xl'>My Quiz</div>
          <QuizCard saveQuizDetail={selectedHero?.question1} />
          <QuizCard saveQuizDetail={selectedHero?.question2} />
          <QuizCard saveQuizDetail={selectedHero?.question3} />
          <QuizCard saveQuizDetail={selectedHero?.question4} />
        </div>
      </div >
      <div className='flex gap-4 justify-around'>
        <Button bg={`green`} color={`white`} width={60} onClick={handleClickSave}>
          SAVE
        </Button>
        <Button bg={`black`} width={60} onClick={onSuccess}>
          Cancel
        </Button>
      </div>
    </>

  );
}
