import { useState } from "react";
import ContentCard from "./ContentCard";
import Modal from "../../../components/Modal";
import QuizCard from "./QuizCard";
import EditHeroForm from "./EditHeroForm";
import CreateHeroForm from "./CreateHeroForm";
import Button from "../../../components/Button";
import useAdmin from "../../../hooks/useAdmin";

// const dataContent = {
//   image: defaultImage,
//   title: 'This is Title message',
//   detail: 'This is Detail message. This is Detail message.',
//   quiz1: {
//     image: imageQuiz,
//     topic: 'This is Detail A',
//     profileImage: imageProfile,
//     name: 'Mathematis1',
//   },
//   quiz2: {
//     image: imageQuiz,
//     topic: 'This is Detail B',
//     profileImage: imageProfile,
//     name: 'Mathematis2',
//   },
//   quiz3: {
//     image: imageQuiz,
//     topic: 'This is Detail C',
//     profileImage: imageProfile,
//     name: 'Mathematis3',
//   },
//   quiz4: {
//     image: imageQuiz,
//     topic: 'This is Detail D',
//     profileImage: imageProfile,
//     name: 'Mathematis4',
//   },
//   quiz5: {
//     image: imageQuiz,
//     topic: 'This is Detail E',
//     profileImage: imageProfile,
//     name: 'Mathematis5',
//   },
//   quiz6: {
//     image: imageQuiz,
//     topic: 'This is Detail F',
//     profileImage: imageProfile,
//     name: 'Mathematis6',
//   },
// };



export default function HeroBox() {
  const { heroContent, setHeroContent, heros, questions } = useAdmin()
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-xl p-4">
      <div className="grid grid-cols-3 gap-x-10 gap-y-2">
        <h1 className="text-font-title col-span-3">Edit Home Page Content</h1>
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
      <div className="flex justify-end pt-6">
        <div className="flex justify-start gap-12 w-full">
          <Button bg={`blue`} width={60} onClick={() => setIsCreate(true)}>
            Create New Content
          </Button>
          <Modal
            open={isCreate}
            title={"Create New Hero Content"}
          >
            <CreateHeroForm
              onSuccess={() => setIsCreate(false)}
              setHeroContent={setHeroContent}
              heroContent={heroContent}
              questions={questions}
            />
          </Modal>
          <Button bg={`black`} width={60} onClick={() => setIsEdit(true)}>
            Edit
          </Button>
          <Modal open={isEdit} title={"Edit Show Hero"}>
            <EditHeroForm
              onSuccess={() => setIsEdit(false)}
              setHeroContent={setHeroContent}
              heroContent={heroContent}
              heros={heros}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
