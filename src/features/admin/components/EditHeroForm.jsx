import { useState } from 'react';
import Button from '../../../components/Button';
import QuizCard from './QuizCard';
import defaultImage from "../../../assets/hh-hero.png";


export default function EditHeroForm({ setHeroContent, heroContent, heros, onSuccess }) {
  const [selectedHero, setSelectedHero] = useState(heroContent);

  const handleChange = (e) => {
    const heroId = e.target.value;
    const hero = heros.find((h) => h.id === parseInt(heroId));
    setSelectedHero(hero);
  };

  const handleClickSave = () => {
    setHeroContent(selectedHero)
    onSuccess()
  }

  return (
    <div className='flex flex-col'>
      <div className='flex gap-6'>
        {/* ########### LEFT BLOCK ########### */}
        <div className='w-[60%] h-[360px] bg-[#F8FAFF] gap-4 p-4 rounded-2xl flex'>
          {/* ========================== IMAGE ========================== */}
          <img
            src={selectedHero?.eventPicture || defaultImage}
            alt='No Image'
            className='bg-red w-2/3 rounded-2xl'
          />

          <div className='flex flex-col gap-4 w-full'>
            {/* ========================== SELECT ========================== */}

            <div className='flex flex-col justify-center'>
              <select
                className='bg-white border border-[#86868b]  rounded-[8px] w-full h-[40px] p-2 hover:cursor-pointer'
                onChange={handleChange}
                value={selectedHero?.id}
              >
                <option value=''>Please select title</option>
                {heros.map((hero) => (
                  <option key={hero.id} value={hero.id}>
                    {hero.title}
                  </option>
                ))}
              </select>
            </div>

            {/* ========================== DETAIl ========================== */}
            <div className='bg-white border border-[#86868b] rounded-xl h-full p-4 overflow-auto'>
              {selectedHero && <div>{selectedHero.detail}</div>}
            </div>
          </div>
        </div>
        {/* ########### RIGHT BLOCK ########### */}
        <div className='bg-[#F8FAFF] w-[40%] p-4 rounded-2xl flex flex-col gap-2'>
          <div className='text-2xl'>My Quiz</div>
          <QuizCard saveQuizDetail={selectedHero?.question1} />
          <QuizCard saveQuizDetail={selectedHero?.question2} />
          <QuizCard saveQuizDetail={selectedHero?.question3} />
          <QuizCard saveQuizDetail={selectedHero?.question4} />
        </div>
      </div>

      <br />

      <div className='flex gap-4 justify-around'>
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
