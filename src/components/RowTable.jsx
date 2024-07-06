import { useState } from 'react';
import Modal from './Modal';
import ModalTable from './ModalTable';

export default function RowTable({
  item,
  onBanUser,
  onUnBanUser,
  setSelectedUser,
}) {
  const [open, setOpen] = useState(false);

  const handleBanClick = () => {
    setSelectedUser(item);
    setOpen(true);
  };

  const handleConfirmBan = () => {
    onBanUser(item);
    setOpen(false);
  };

  const handleConfirmUnBan = () => {
    onUnBanUser(item);
    setOpen(false);
  };

  return (
    <div className='grid grid-cols-10 gap-4 text-center py-6 border-b items-center'>
      <div className='col-span-2'>{item.detail1}</div>
      <div className='col-span-2'>{item.detail2}</div>
      <div className='col-span-2'>{item.detail3}</div>
      <div className='col-span-2'>{item.detail4}</div>
      <div className='col-span-1'>{item.detail5}</div>
      <div className='flex justify-center items-center gap-8'>
        <button
          className={`text-white p-3 rounded-xl min-w-24  ${
            item.detail5 === 'Active'
              ? 'bg-darkred hover:bg-pink-500'
              : 'bg-green hover:bg-lime-200'
          }`}
          onClick={handleBanClick}
        >
          {item.detail5 === 'Active' ? 'Banned' : 'Unbanned'}
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={
            item.detail5 === 'Active'
              ? `Are you want to Banning this user`
              : `Are you want to Unbanning this user`
          }
        >
          <ModalTable
            onConfirm={
              item.detail5 === 'Active' ? handleConfirmBan : handleConfirmUnBan
            }
            onCancel={() => setOpen(false)}
            isActive={item.detail5 === 'Active'}
          />
        </Modal>
      </div>
    </div>
  );
}
