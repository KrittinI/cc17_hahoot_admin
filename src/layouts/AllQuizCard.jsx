import { useState } from 'react';
import ButtonAdmin from '../components/ButtonAdmin';
import ContentCard from '../components/ContentCard';
import Modal from '../components/Modal';
import QuizCard from '../components/QuizCard';
import ModalEditContent from '../components/ModalEditContent';
import imageQuiz from '../assets/editIcon.png';
import imageProfile from '../assets/user.png';

const dataContent = {
  title: 'This is Title message',
  detail:
    'This is Detail message. This is Detail message. This is Detail message. This is Detail message. This is Detail message. This is Detail message. This is Detail message. This is Detail message. This is Detail message.',
};

const quizDetail = [
  {
    image: imageQuiz,
    topic: 'This is Detail A',
    profileImage: imageProfile,
    name: 'Mathematis1',
  },
  {
    image: imageQuiz,
    topic: 'This is Detail B',
    profileImage: imageProfile,
    name: 'Mathematis2',
  },
  {
    image: imageQuiz,
    topic: 'This is Detail C',
    profileImage: imageProfile,
    name: 'Mathematis3',
  },
  {
    image: imageQuiz,
    topic: 'This is Detail D',
    profileImage: imageProfile,
    name: 'Mathematis4',
  },
];

export default function AllQuizCard() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(dataContent);
  const [selectedQuizDetail, setSelectedQuizDetail] = useState(null);
  const [savedQuizDetail, setSavedQuizDetail] = useState(null);

  const handleSave = () => {
    setSavedQuizDetail(selectedQuizDetail);
  };
  const handleEdit = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className='flex flex-col mx-8 my-3'>
        <div className='flex flex-row '>
          <div className='  flex flex-col  w-2/3'>
            <ContentCard message={message} />
          </div>
          <div className='  flex flex-col   w-1/3 '>
            <QuizCard savedQuizDetail={savedQuizDetail} />
          </div>
        </div>
        {/* ===================================================================*/}
        <div className='flex justify-end'>
          <div className='flex justify-start w-full bg-white p-8 rounded-b-3xl'>
            <ButtonAdmin width='w-[260px]' onClick={handleEdit}>
              Edit Content
            </ButtonAdmin>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              title={'EDIT'}
              width={50}
            >
              <ModalEditContent
                onCancel={() => setOpen(false)}
                setSelectedQuizDetail={setSelectedQuizDetail}
                onSave={handleSave}
                quizDetail={quizDetail}
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
