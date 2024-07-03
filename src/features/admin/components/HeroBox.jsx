import { useState } from 'react';
import ButtonAdmin from './ButtonAdmin';
import ContentCard from './ContentCard';
import Modal from '../../../components/Modal';
import QuizCard from './QuizCard';
import EditHeroForm from './EditHeroForm';
import imageQuiz from '../../../assets/editIcon.png';
import imageProfile from '../../../assets/user.png';
import defaultImage from '../../../assets/hh-hero.png';
import CreateHeroForm from './CreateHeroForm';

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
  const [open, setOpen] = useState(false);
  const [heroContent, setHeroContent] = useState(dataContent);

  const handleEdit = () => {
    setOpen(true);
  };

  const handleSave = () => {
    setHeroContent(heroContent);
    setOpen(false);
  };

  return (
    <div className='flex flex-col bg-white rounded-xl p-4'>
      <div className='grid grid-cols-3'>
        <div className='  flex flex-col  col-span-2'>
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
          <ButtonAdmin width='w-[130px]' onClick={handleEdit}>
            Create
          </ButtonAdmin>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={'CREATE'}
            width={50}
          >
            <CreateHeroForm
              onCancel={() => setOpen(false)}
              setHeroContent={setHeroContent}
              handleSave={handleSave}
              dataContent={heroContent}
            />
          </Modal>
          <ButtonAdmin width='w-[130px]' onClick={handleEdit}>
            Edit
          </ButtonAdmin>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={'EDIT'}
            width={50}
          >
            <EditHeroForm
              onCancel={() => setOpen(false)}
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
