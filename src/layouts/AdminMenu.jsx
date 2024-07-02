import MenuTab from '../components/MenuTab';
import { IoPerson } from 'react-icons/io5';
import { PiBagFill } from 'react-icons/pi';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Logo from '../assets/icon-hh.png';

export default function AdminMenu() {
  const allTab = [
    {
      id: 4,
      name: 'Home page',
      number: 100,
      icon: (
        <IoPerson className='bg-[#E7EDFF] text-[#396AFF] rounded-full p-[15px] w-[70px] h-[70px] flex justify-center align-middle' />
      ),
      link: '/admin',
    },
    {
      id: 1,
      name: 'User Profile',
      number: 200,
      icon: (
        // <IoPersonCircleSharp className='bg-[#FFF5D9] text-[#396AFF] rounded-full p-[15px] w-[70px] h-[70px] flex justify-center align-middle' />
        <img
          src={Logo}
          className='bg-[#FFF5D9]  rounded-full p-[15px] w-[70px] h-[70px] flex justify-center align-middle'
        />
        // <Logo />
      ),
      link: '/admin/userProfile',
    },
    {
      id: 2,
      name: 'Event list',
      number: 300,
      icon: (
        <PiBagFill className='bg-[#FFE0EB] text-[#FB7185] rounded-full p-[15px] w-[70px] h-[70px] flex justify-center align-middle' />
      ),
      link: '/admin/eventList',
    },
    {
      id: 3,
      name: 'Quiz store',
      number: 400,
      icon: (
        <FaScrewdriverWrench className='bg-[#DCFAF8] text-[#16DBCC] rounded-full p-[15px] w-[70px] h-[70px] flex justify-center align-middle' />
      ),
      link: '/admin/quizStore',
    },
  ];

  return (
    <div className='flex justify-between px-20 py-8 mt-20 '>
      {allTab.map((tab) => (
        <div key={tab.id}>
          <MenuTab
            tabLink={tab.link}
            tabIcon={tab.icon}
            tabName={tab.name}
            tabNumber={tab.number}
          />
        </div>
      ))}
    </div>
  );
}
