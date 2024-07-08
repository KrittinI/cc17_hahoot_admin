import { useNavigate } from 'react-router-dom';
import MenuTab from '../../../components/MenuTab';
import { IoPerson } from 'react-icons/io5';
import { PiBagFill } from 'react-icons/pi';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Logo from '../../../assets/icon-hh.png';
import { FaDiceD6 } from 'react-icons/fa';

export default function AdminMenu() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  const allTab = [
    {
      id: 4,
      name: 'Overview',
      icon: (
        <IoPerson className='bg-[#E7EDFF] text-[#718EBF] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle' />
      ),
      link: '/admin',
    },
    {
      id: 1,
      name: 'Users',
      icon: (
        <img
          src={Logo}
          className='bg-[#FFF5D9]  rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle'
        />
      ),
      link: '/admin/user-profile',
    },
    {
      id: 2,
      name: 'Events',
      icon: (
        <PiBagFill className='bg-[#FFE0EB] text-[#FB7185] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle' />
      ),
      link: '/admin/event-list',
    },
    {
      id: 3,
      name: 'Questions',
      icon: (
        <FaScrewdriverWrench className='bg-[#DCFAF8] text-[#16DBCC] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle' />
      ),
      link: '/admin/quiz-store',
    },

    {
      id: 5,
      name: 'Rooms',
      icon: (
        <FaDiceD6 className='bg-gray-300 text-black rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle' />
      ),
      link: '/admin/room',
    },
  ];

  return (
    <div className='flex gap-8 justify-between items-center pt-4 w-[65%] mx-auto'>
      {allTab.map((item) => (
        <MenuTab
          key={item.id}
          onClick={() => handleClick(item.link)}
          tab={item}
        />
      ))}
    </div>
  );
}
