import { useState } from 'react';
import Modal from './Modal';
import ModalTable from './ModalTable';

export default function RowTable({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='grid grid-cols-10 gap-4 text-center py-6 border-b items-center'>
      <div className='col-span-2'>{item.detail1}</div>
      <div className='col-span-2'>{item.detail2}</div>
      <div className='col-span-2'>{item.detail3}</div>
      <div className='col-span-2'>{item.detail4}</div>
      <div className='col-span-1'>{item.detail5}</div>
      <div className='flex justify-center items-center gap-8'>
        <button
          className='bg-darkred text-white p-3 rounded-xl hover:bg-pink-500'
          onClick={() => setOpen(true)}
        >
          BANNED
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`Are you want to Banning this user`}
        >
          <ModalTable onCancel={() => setOpen(false)} />
        </Modal>
      </div>
    </div>
  );
}
