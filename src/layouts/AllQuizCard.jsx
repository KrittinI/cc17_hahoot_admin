import { useState } from 'react';
import ButtonAdmin from '../components/ButtonAdmin';
import ContentCard from '../components/ContentCard';
import Modal from '../components/Modal';
import QuizCard from '../components/QuizCard';
import ModalEditContent from '../components/ModalEditContent';

const dataContent = {
  title: 'This is Title message',
  detail: 'This is Detail message',
};

export default function AllQuizCard({ message }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(dataContent);

  const handleEdit = () => {
    setOpen(true);
  };
  return (
    <div className='flex flex-col bg-white rounded-3xl m-8 p-8'>
      <div className='flex'>
        <div className=' w-2/3 flex flex-col'>
          <h1 className='text-[#343C6A] text-base'> Edit Home Page content</h1>
          <br />
          <ContentCard />
        </div>
        <div className=' w-1/3 flex flex-col'>
          <h1 className='text-[#343C6A] text-base'>Free Quiz Card</h1>
          <br />
          <QuizCard />
        </div>
      </div>
      {/* ===================================================================*/}
      <div className='flex justify-end'>
        <div className='flex justify-end w-full'>
          <ButtonAdmin width='w-[260px]' onClick={handleEdit}>
            Edit Content
          </ButtonAdmin>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={'EDIT'}
            width={50}
          >
            <ModalEditContent onCancel={() => setOpen(false)} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
