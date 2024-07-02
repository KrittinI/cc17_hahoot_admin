import { useNavigate } from 'react-router-dom';
import MenuTab from '../components/MenuTab';

export default function AdminMenu() {
  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
  }
  const allTab = [
    {
      id: 4,
      name: 'Home page',
      number: 100,
      icon: 'urlImage1',
      link: '/admin',
    },
    {
      id: 1,
      name: 'User Profile',
      number: 200,
      icon: 'urlImage2',
      link: '/admin/userProfile',
    },
    {
      id: 2,
      name: 'Event list',
      number: 300,
      icon: 'urlImage3',
      link: '/admin/eventList',
    },
    {
      id: 3,
      name: 'Quiz store',
      number: 400,
      icon: 'urlImage4',
      link: '/admin/quizStore',
    },
  ];

  return (
    <div className='flex gap-8 justify-between items-center py-8 w-[80%] mx-auto'>
      {allTab.map((tab) => (
        <MenuTab
          key={tab.id}
          onClick={() => handleClick(tab.link)}
          tab={tab}
        />
      ))}
    </div>
  );
}
