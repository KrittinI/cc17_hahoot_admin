export default function ModalTable({ onCancel, onConfirm, isActive }) {
  return (
    <div className="flex justify-around">
      <button
        className="bg-green p-2 rounded-xl hover:bg-darkgreen"
        onClick={onConfirm}
      >
        {isActive ? `Yes, Ban it.` : `Yes, Unban it.`}
      </button>
      <button
        className="bg-red p-2 rounded-xl hover:bg-darkred"
        onClick={onCancel}
      >
        {isActive ? `I give last Hope.` : `No,He deserve it`}
      </button>
    </div>
  );
}
