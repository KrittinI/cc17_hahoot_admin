import { useState } from 'react';
import QuizItem from '../../../components/QuizItem';
import Button from '../../../components/Button';

export default function EditHeroForm({ handleSave, heroContent, heros, onCancel }) {
  const [selectHero, setSelectHero] = useState('');
  const [quizDetail, setQuizDetail] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  const handleChange = (e) => {
    const heroId = e.target.value;
    const hero = heros.find((h) => h.id === parseInt(heroId));
    setSelectHero(heroId);
    setSelectedHero(hero);
    setQuizDetail([
      hero.question1,
      hero.question2,
      hero.question3,
      hero.question4,
    ]);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex gap-6'>
        {/* ########### LEFT BLOCK ########### */}
        <div className='w-[832px] h-[360px] bg-[#F8FAFF] gap-4 p-4 rounded-2xl flex'>
          {/* ========================== IMAGE ========================== */}
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
                value={selectHero}
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
            <div className='bg-white border border-[#86868b] rounded-xl w-full h-full p-4 overflow-auto'>
              {selectedHero && <div>{selectedHero.detail}</div>}
            </div>
          </div>
        </div>
        {/* ########### RIGHT BLOCK ########### */}
        <div className='bg-[#F8FAFF] p-4 rounded-2xl flex flex-col gap-2'>
          <div className='text-2xl'>My Quiz</div>
          <div>
            <QuizItem selectedHero={selectedHero} quizDetail={quizDetail} />
          </div>
        </div>
      </div>

      <br />

      <div className='flex gap-4 justify-around'>
        <Button bg={`green`} color={`white`} width={60} onClick={handleSave}>
          SAVE
        </Button>
        <Button bg={`black`} width={60} onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
