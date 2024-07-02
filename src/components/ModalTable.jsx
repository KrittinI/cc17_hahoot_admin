export default function ModalTable({ onCancel, onConfirm, isActive }) {
  return (
    <div className='flex justify-around m-5'>
      <button
        className='bg-green p-2 rounded-xl hover:bg-lime-300'
        onClick={onConfirm}
      >
        {isActive ? `Yes, Ban it.` : `Yes, Unban it.`}
      </button>
      <button
        className='bg-red p-2 rounded-xl hover:bg-pink-300'
        onClick={onCancel}
      >
        {isActive ? `I give last Hope.` : `No,He deserve it`}
      </button>
    </div>
  );
}
