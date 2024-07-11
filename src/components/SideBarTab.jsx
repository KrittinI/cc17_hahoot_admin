export default function SideBarTab({ data, onClick, selected }) {
  return (
    <button
      className={`rounded-xl w-full p-4 flex gap-8  ${selected ? "bg-lblue" : "bg-white hover:bg-lblue"}`}
      onClick={onClick}>
      <div className='w-[25px] h-[25px] rounded-full'>{data?.icon}</div>
      <div className='text-[18px]'>{data?.title}</div>
    </button>
  );
}
