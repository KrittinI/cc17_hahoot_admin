import { useState } from 'react';
import ContentCard from './ContentCard';
import Modal from '../../../components/Modal';
import QuizCard from './QuizCard';
import EditHeroForm from './EditHeroForm';
import imageQuiz from '../../../assets/editIcon.png';
import imageProfile from '../../../assets/user.png';
import defaultImage from '../../../assets/hh-hero.png';
import CreateHeroForm from './CreateHeroForm';
import Button from '../../../components/Button';

const dataContent = {
  image: defaultImage,
  title: 'This is Title message',
  detail: 'This is Detail message. This is Detail message.',
  quiz1: {
    image: imageQuiz,
    topic: 'This is Detail A',
    profileImage: imageProfile,
    name: 'Mathematis1',
  },
  quiz2: {
    image: imageQuiz,
    topic: 'This is Detail B',
    profileImage: imageProfile,
    name: 'Mathematis2',
  },
  quiz3: {
    image: imageQuiz,
    topic: 'This is Detail C',
    profileImage: imageProfile,
    name: 'Mathematis3',
  },
  quiz4: {
    image: imageQuiz,
    topic: 'This is Detail D',
    profileImage: imageProfile,
    name: 'Mathematis4',
  },
};

export default function HeroBox() {
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [heroContent, setHeroContent] = useState(dataContent);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setHeroContent(heroContent);
    setIsEdit(false);
  };

  return (
    <div className='flex flex-col bg-white rounded-xl p-4'>
      <div className='grid grid-cols-3'>
        <div className=' flex flex-col  col-span-2'>
          <ContentCard dataContent={heroContent} />
        </div>
        <div className='flex flex-col col-span-1'>
          <QuizCard
            saveQuizDetail={[
              heroContent.quiz1,
              heroContent.quiz2,
              heroContent.quiz3,
              heroContent.quiz4,
            ]}
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='flex justify-start gap-4 w-full bg-white p-8 rounded-b-3xl'>
          <Button bg={`black`} width={40} onClick={() => setIsCreate(true)}>
            Create
          </Button>
          <Modal
            open={isCreate}
            onClose={() => setIsCreate(false)}
            title={'Create New Hero Content'}
          >
            <CreateHeroForm
              onCancel={() => setIsCreate(false)}
              setHeroContent={setHeroContent}
              handleSave={handleSave}
              dataContent={heroContent}
            />
          </Modal>
          <Button bg={`black`} width={40} onClick={handleEdit}>
            Edit
          </Button>
          <Modal
            open={isEdit}
            onClose={() => setIsEdit(false)}
            title={'EDIT'}
          >
            <EditHeroForm
              onCancel={() => setIsEdit(false)}
              setHeroContent={setHeroContent}
              handleSave={handleSave}
              dataContent={heroContent}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
