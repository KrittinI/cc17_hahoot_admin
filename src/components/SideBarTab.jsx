export default function SideBarTab({ icon, tabName }) {
  return (
    <button className='rounded-xl w-full p-4 flex gap-8 hover:bg-blue hover:text-white'>
      <div className='w-[25px] h-[25px] rounded-full'>{icon}</div>
      <div className='text-[18px]'>{tabName}</div>
    </button>
  );
}
