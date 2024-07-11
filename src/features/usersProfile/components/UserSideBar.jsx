import SideBarTab from '../../../components/SideBarTab';
import { IoPerson } from 'react-icons/io5';

export default function UserSideBar({ onClick, selected }) {
  const sideMenu = [
    {
      id: 1,
      icon: <IoPerson className='w-full h-full' />,
      name: 'active',
      title: 'Active Player',
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
