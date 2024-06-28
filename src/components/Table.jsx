import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RowTable from './RowTable';

const userTable = [
  { title: 'Username', colSpan: 2 },
  { title: 'E-Mail', colSpan: 2 },
  { title: 'Event list', colSpan: 2 },
  { title: 'Quiz list', colSpan: 2 },
  { title: 'Status', colSpan: 1 },
];
const eventTable = [
  { title: 'Title', colSpan: 3 },
  { title: 'Create by', colSpan: 3 },
  { title: 'Topic', colSpan: 2 },
  { title: 'Quiz list', colSpan: 1 },
];
const quizTable = [
  { title: 'Title', colSpan: 6 },
  { title: 'Topic', colSpan: 4 },
];

const dataUserTable = [
  {
    detail1: 'Spotify Subscription1',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'Active',
  },
  {
    detail1: 'Spotify Subscription2',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'Active',
  },
  {
    detail1: 'Spotify Subscription3',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'InActive',
  },
  {
    detail1: 'Spotify Subscription4',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'Active',
  },
  {
    detail1: 'Spotify Subscription5',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'InActive',
  },
  {
    detail1: 'Spotify Subscription6',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'Active',
  },
  {
    detail1: 'Spotify Subscription7',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'InActive',
  },
  {
    detail1: 'Spotify Subscription8',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'Active',
  },
  {
    detail1: 'Spotify Subscription9',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'Active',
  },
  {
    detail1: 'Spotify Subscription10',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
    detail5: 'Active',
  },
];
const dataEventTable = [
  {
    detail1: 'BlackBean Subscription',
    detail2: 'ssBlackBean@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'BlackBean Subscription',
    detail2: 'ssBlackBean@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'BlackBean Subscription',
    detail2: 'ssBlackBean@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'BlackBean Subscription',
    detail2: 'ssBlackBean@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'BlackBean Subscription',
    detail2: 'ssBlackBean@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'BlackBean Subscription',
    detail2: 'ssBlackBean@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'BlackBean Subscription',
    detail2: 'ssBlackBean@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
];
const dataQuizTable = [
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
  {
    detail1: 'Spotify Subscription',
    detail2: 'ssSpotify@gmail.com',
    detail3: '100',
    detail4: '500',
  },
];

export default function Table() {
  const [tableTopic, setTableTopic] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const location = useLocation();

  const handleBanUser = () => {
    setTableData((prevData) =>
      prevData.map((user) =>
        user === selectedUser ? { ...user, detail5: 'InActive' } : user
      )
    );
    handleCloseModal();
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/admin/userProfile':
        setTableTopic(userTable);
        setTableData(dataUserTable);
        // setTableDetail(dataUserTable);
        break;
      case '/admin/quizStore':
        setTableTopic(quizTable);
        setTableData(dataQuizTable);
        // setTableDetail(dataQuizTable);
        break;
      case '/admin/eventList':
        setTableTopic(eventTable);
        setTableData(dataEventTable);
        // setTableDetail(dataEventTable);
        break;
      default:
        setTableTopic([]);
        setTableData([]);
        break;
    }
  }, [location.pathname]);

  // ################################################
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4 text-[#343C6A]'>User Profile</h1>
      <div className='bg-white p-6 rounded-[25px]'>
        <div>
          <div className='grid grid-cols-10 gap-4 text-center font-semibold text-[#718EBF]'>
            {tableTopic.map((table, index) => (
              <div key={index} className={`col-span-${table.colSpan}`}>
                {table.title}
              </div>
            ))}
          </div>
        </div>
        <hr className='my-4' />
        {tableData.map((item, index) => (
          <RowTable key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
