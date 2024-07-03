import { useState } from 'react';
import ButtonAdmin from '../components/ButtonAdmin';
import ContentCard from '../components/ContentCard';
import Modal from '../components/Modal';
import QuizCard from '../components/QuizCard';
import ModalEditContent from '../components/ModalEditContent';
import imageQuiz from '../assets/editIcon.png';
import imageProfile from '../assets/user.png';
import defaultImage from '../assets/hh-hero.png';
import ModalCreateContent from '../components/ModalCreateContent';

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

export default function AllQuizCard() {
  const [open, setOpen] = useState(false);
  const [selectContent, setSelectContent] = useState(dataContent);
  const [savedContent, setSavedContent] = useState(dataContent);

  const handleEdit = () => {
    setOpen(true);
  };

  const handleSave = () => {
    setSavedContent(selectContent);
    setOpen(false);
  };

  return (
    <div>
      <div className='flex flex-col mx-8 my-3'>
        <div className='flex flex-row '>
          <div className='  flex flex-col  w-2/3'>
            <ContentCard dataContent={savedContent} />
          </div>
          <div className='  flex flex-col   w-1/3 '>
            <QuizCard
              saveQuizDetail={[
                savedContent.quiz1,
                savedContent.quiz2,
                savedContent.quiz3,
                savedContent.quiz4,
              ]}
            />
          </div>
        </div>
        {/* ############################################################################################################ */}
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
              <ModalCreateContent
                onCancel={() => setOpen(false)}
                setSelectContent={setSelectContent}
                handleSave={handleSave}
                dataContent={selectContent}
              />
            </Modal>
            {/* ############################################################################################################ */}
            <ButtonAdmin width='w-[130px]' onClick={handleEdit}>
              Edit
            </ButtonAdmin>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              title={'EDIT'}
              width={50}
            >
              <ModalEditContent
                onCancel={() => setOpen(false)}
                setSelectContent={setSelectContent}
                handleSave={handleSave}
                dataContent={selectContent}
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
