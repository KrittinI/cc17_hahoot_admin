import { useState } from "react";
import ContentCard from "./ContentCard";
import Modal from "../../../components/Modal";
import QuizCard from "./QuizCard";
import EditHeroForm from "./EditHeroForm";
import CreateHeroForm from "./CreateHeroForm";
import Button from "../../../components/Button";
import useAdmin from "../../../hooks/useAdmin";

export default function HeroBox() {
  const { heroContent, setHeroContent, heros, questions } = useAdmin()
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-white gap-4 rounded-xl p-4">
        <div className="grid grid-cols-3 gap-x-10 gap-y-2">
          <h1 className="text-font-title col-span-3">Home Page Content</h1>
          <div className=" flex flex-col col-span-2 gap-y-4">
            <ContentCard dataContent={heroContent} />
          </div>
          <div className="flex flex-col col-span-1 gap-y-4">
            <QuizCard saveQuizDetail={heroContent?.question1} />
            <QuizCard saveQuizDetail={heroContent?.question2} />
            <QuizCard saveQuizDetail={heroContent?.question3} />
            <QuizCard saveQuizDetail={heroContent?.question4} />
          </div>
        </div>
        <div className="flex justify-start gap-12 w-full">
          <Button bg={`blue`} width={60} onClick={() => setIsCreate(true)}>
            Create New Content
          </Button>
          <Button bg={`black`} width={60} onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </div>
      </div>
      <Modal
        open={isCreate}
        title={"Create New Hero Content"}
        j="start"
      >
         <hr className="shadow-2"/>
        <CreateHeroForm
          onSuccess={() => setIsCreate(false)}
          setHeroContent={setHeroContent}
          heroContent={heroContent}
          questions={questions}
        />
      </Modal>
      <Modal open={isEdit} title={"Edit Show Hero"} j="start">
        <hr className="shadow-2"/>
        <EditHeroForm
          onSuccess={() => setIsEdit(false)}
          setHeroContent={setHeroContent}
          heroContent={heroContent}
          heros={heros}
        />
      </Modal>
    </>
  );
}
