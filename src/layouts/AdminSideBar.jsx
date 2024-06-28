import SideBarTab from '../components/SideBarTab';
import { HomeIcon, TransactionsIcon } from '../icons/Admin';

export default function AdminSideBar() {
  const sideMenu = [
    {
      id: 1,
      icon: <HomeIcon />,
      name: 'Dashboard',
    },
    { id: 2, icon: <TransactionsIcon />, name: 'Transactions' },
    { id: 3, icon: 'icon3', name: 'Accounts' },
    { id: 4, icon: 'icon4', name: 'Investments' },
    { id: 5, icon: 'icon5', name: 'Credit Cards ' },
    { id: 6, icon: 'icon6', name: 'Loans' },
    { id: 7, icon: 'icon7', name: 'Services' },
    { id: 8, icon: 'icon8', name: 'My Privileges ' },
    { id: 9, icon: 'icon9', name: 'Setting' },
  ];

  return (
    <div className='bg-white p-4 flex flex-col gap-10 w-[255px] rounded-[25px]'>
      {sideMenu.map((tab) => (
        <div key={tab.id}>
          <SideBarTab icon={tab.icon} tabName={tab.name} />
        </div>
      ))}
    </div>
  );
}
