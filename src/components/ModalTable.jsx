export default function ModalTable({ onCancel }) {
  return (
    <div className='flex justify-around m-5'>
      <button className='bg-green p-2 rounded-xl hover:bg-lime-300'>
        Yes, Ban it.
      </button>
      <button
        className='bg-red p-2 rounded-xl hover:bg-pink-300'
        onClick={onCancel}
      >
        I give last Hope.
      </button>
    </div>
  );
}
