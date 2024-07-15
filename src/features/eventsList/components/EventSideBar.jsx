import SideBarTab from '../../../components/SideBarTab';
import { MdOutlineQuestionMark, MdQuestionAnswer } from 'react-icons/md';

export default function EventSideBar({ onClick, selected }) {
  const sideMenu = [
    {
      id: 1,
      icon: <MdOutlineQuestionMark className='w-full h-full' />,
      name: 'topic',
      title: 'Question Topic',
    },
    // {
    //   id: 2,
    //   icon: <MdQuestionAnswer className='w-full h-full' />,
    //   name: 'answer',
    //   title: 'Answer Choice',
    // },
  ];

  return (
    <div className='bg-white p-4 flex flex-col gap-4 w-full rounded-xl'>
      {sideMenu.map((tab) => (
        <div key={tab.id}>
          <SideBarTab data={tab} onClick={() => onClick(tab.name, tab.name)} selected={selected === tab?.name} />
        </div>
      ))}
    </div>
  );
}
