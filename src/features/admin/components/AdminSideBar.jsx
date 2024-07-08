import SideBarTab from '../../../components/SideBarTab';
import { IoPerson } from 'react-icons/io5';
import { BsGraphUpArrow, BsCreditCard } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';

export default function AdminSideBar({ onClick }) {
  const sideMenu = [
    {
      id: 1,
      icon: <AiFillHome className='w-full h-full' />,
      name: 'answer',
    },
    {
      id: 2,
      icon: <GrTransaction className='w-full h-full' />,
      name: 'topic',
    },
    { id: 3, icon: <IoPerson className='w-full h-full' />, name: 'account' },
    {
      id: 4,
      icon: <BsGraphUpArrow className='w-full h-full' />,
      name: 'Investments',
    },
    {
      id: 5,
      icon: <BsCreditCard className='w-full h-full' />,
      name: 'Credit Cards ',
    },
    {
      id: 6,
      icon: <GiReceiveMoney className='w-full h-full' />,
      name: 'Loans',
    },
    {
      id: 7,
      icon: <FaScrewdriverWrench className='w-full h-full' />,
      name: 'Services',
    },
    { id: 8, icon: 'X', name: 'My Privileges ' },
    {
      id: 9,
      icon: <IoIosSettings className='w-full h-full' />,
      name: 'Setting',
    },
  ];

  return (
    <div className='bg-white p-4 flex flex-col gap-4 w-full rounded-xl'>
      {sideMenu.map((tab) => (
        <div key={tab.id}>
          <SideBarTab icon={tab.icon} tabName={tab.name} onClick={() => onClick(tab.name)} />
        </div>
      ))}
    </div>
  );
}
