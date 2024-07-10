import SideBarTab from '../../../components/SideBarTab';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';


export default function QuizSideBar({ onClick, selected }) {
  const sideMenu = [
    {
      id: 1,
      icon: <IoIosSettings className='w-full h-full' />,
      name: 'answer',
      title: 'Answer Choice',
    },
    {
      id: 2,
      icon: <IoIosSettings className='w-full h-full' />,
      name: 'topic',
      title: 'Question Topic',
    },
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
