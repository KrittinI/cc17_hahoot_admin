import { useNavigate } from 'react-router-dom';
import MenuTab from '../components/MenuTab';
import { IoPerson } from 'react-icons/io5';
import { PiBagFill } from 'react-icons/pi';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Logo from '../assets/icon-hh.png';
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
      number: 100,
      icon: (
        <IoPerson className='bg-[#E7EDFF] text-[#396AFF] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle' />
      ),
      link: '/admin',
    },
    {
      id: 1,
      name: 'Users',
      number: 200,
      icon: (
        <img
          src={Logo}
          className='bg-[#FFF5D9]  rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle'
        />
      ),
      link: '/admin/userProfile',
    },
    {
      id: 2,
      name: 'Events',
      number: 300,
      icon: (
        <PiBagFill className='bg-[#FFE0EB] text-[#FB7185] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle' />
      ),
      link: '/admin/eventList',
    },
    {
      id: 3,
      name: 'Questions',
      number: 400,
      icon: (
        <FaScrewdriverWrench className='bg-[#DCFAF8] text-[#16DBCC] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle' />
      ),
      link: '/admin/quizStore',
    },

    {
      id: 5,
      name: 'Rooms',
      number: 400,
      icon: (
        <FaDiceD6 className='bg-gray-400 text-black rounded-full p-[15px] w-[70px] h-[70px] flex justify-center align-middle' />
      ),
      link: '/admin/room',
    },
  ];

  return (
    <div className='flex gap-8 justify-between items-center py-8 w-[65%] mx-auto'>
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
