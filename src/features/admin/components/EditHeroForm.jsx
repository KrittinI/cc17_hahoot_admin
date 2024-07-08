import { useState } from "react";
import Button from "../../../components/Button";
import QuizCard from "./QuizCard";
import defaultImage from "../../../assets/hh-hero.png";
import adminApi from "../../../api/admin";

export default function EditHeroForm({
  setHeroContent,
  heroContent,
  heros,
  onSuccess,
}) {
  const [selectedHero, setSelectedHero] = useState(heroContent);

  const handleChange = (e) => {
    const heroId = e.target.value;
    const hero = heros.find((h) => h.id === parseInt(heroId));
    setSelectedHero(hero);
  };

  const handleClickSave = async () => {
    try {
      await adminApi.updateHero(selectedHero.id);
      setHeroContent(selectedHero);
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex gap-2">
        <div className="w-[800px] h-[280px] gap-4 p-4 rounded-xl grid grid-cols-5">
          <div
            role="button"
            className="col-span-2 h-full bg-grey flex justify-center items-center rounded-xl shadow-xl hover:bg-darkgrey"
          >
            <img
              src={selectedHero?.eventPicture || defaultImage}
              alt="No Image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-3 col-span-3">
            <select
              className="bg-white border border-[#86868b] rounded-[8px] h-[40px] p-2 hover:cursor-pointer"
              onChange={handleChange}
              value={selectedHero?.id}
            >
              <option value="" disabled className="full">
                Please select title
              </option>
              {heros.map((hero) => (
                <option key={hero.id} value={hero.id}>
                  {hero.title}
                </option>
              ))}
            </select>
            <textarea
              name="description"
              value={selectedHero.detail}
              className="border max-w-full rounded-lg h-full overflow-auto p-4"
            />
          </div>
        </div>
        <div className="max-w-[400px] rounded-xl flex flex-col gap-2 p-2">
          <div className="text-font-title border-grey">My Quiz</div>
          <QuizCard saveQuizDetail={selectedHero?.question1} />
          <QuizCard saveQuizDetail={selectedHero?.question2} />
          <QuizCard saveQuizDetail={selectedHero?.question3} />
          <QuizCard saveQuizDetail={selectedHero?.question4} />
        </div>
      </div>
      <div className="flex gap-12 justify-start p-">
        <Button bg={`black`} width={60} onClick={onSuccess}>
          Cancel
        </Button>
        <Button
          bg={`blue`}
          color={`white`}
          width={60}
          onClick={handleClickSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
