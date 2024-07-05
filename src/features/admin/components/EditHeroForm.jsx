import { useState } from 'react';
import QuizItem from '../../../components/QuizItem';
import Button from '../../../components/Button';

export default function EditHeroForm({ handleSave, heroContent }) {
  const [selectedHeroId, setSelectedHeroId] = useState('');
  const [quizDetail, setQuizDetail] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  const handleChange = (e) => {
    const heroId = e.target.value;
    const hero = heroContent.find((h) => h.id === parseInt(heroId));
    setSelectedHeroId(heroId);
    setSelectedHero(hero);
    setQuizDetail([hero.quiz1, hero.quiz2, hero.quiz3, hero.quiz4]);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex gap-6'>
        {/* ########### LEFT BLOCK ########### */}
        <div className='w-[832px] h-[360px] bg-[#F8FAFF] gap-4 p-4 rounded-2xl flex'>
          {/* <div
            role='button'
            className='h-full w-full bg-red  justify-center items-center rounded-xl'
          ></div> */}
          <img
            src={selectedHero && selectedHero.eventPicture}
            alt='No Image'
            className='bg-red w-2/3 rounded-2xl'
          />

          <div className='flex flex-col gap-4 w-full'>
            {/* ========================== SELECT ========================== */}

            <div className='flex flex-col justify-center'>
              <select
                className='bg-white border border-[#86868b]  rounded-[8px] w-full h-[40px] p-2 hover:cursor-pointer'
                onChange={handleChange}
                value={selectedHeroId}
              >
                <option value=''>Please select title</option>
                {heroContent.map((hero) => (
                  <option key={hero.id} value={hero.id}>
                    {hero.title}
                  </option>
                ))}
              </select>
            </div>

            {/* ========================== DETAIl ========================== */}
            <div className='bg-white border border-[#86868b] rounded-xl w-full h-full p-4'>
              {selectedHero && <div>{selectedHero.detail}</div>}
            </div>
            {/* ========================== DETAIl ========================== */}
          </div>
        </div>
        {/* ########### RIGHT BLOCK ########### */}
        <div className='bg-[#F8FAFF] p-4 rounded-2xl flex flex-col gap-2'>
          <div className='text-2xl'>My Quiz</div>
          <div>
            <QuizItem
              selectedHero={selectedHero}
              setQuizDetail={setQuizDetail}
            />
          </div>
        </div>
      </div>

      <br />

      <div className='flex gap-4 justify-start'>
        <Button bg={`green`} color={`white`} width={60} onClick={handleSave}>
          SAVE
        </Button>
      </div>
    </div>
  );
}
