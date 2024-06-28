export default function SideBarTab({ icon, tabName }) {
  return (
    <button className='flex gap-8'>
      <div className='bg-yellow w-[25px] h-[25px] rounded-full'>{icon}</div>
      <div className='text-[18px]'>{tabName}</div>
    </button>
  );
}
