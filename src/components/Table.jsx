import { LuPencil } from 'react-icons/lu';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const userTable = [
  { title: 'Username', colSpan: 3 },
  { title: 'E-Mail', colSpan: 3 },
  { title: 'Event list', colSpan: 1 },
  { title: 'Quiz list', colSpan: 1 },
];
const eventTable = [
  { title: 'Title', colSpan: 3 },
  { title: 'Create by', colSpan: 3 },
  { title: 'Topic', colSpan: 1 },
  { title: 'Quiz list', colSpan: 1 },
];
const quizTable = [
  { title: 'Title', colSpan: 6 },
  { title: 'Topic', colSpan: 4 },
];

export default function Table({ dataUserTable }) {
  const [tableTopic, setTableTopic] = useState([]);
  // const [tableDetail, setTableDetail] = useState([]);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/admin/userProfile':
        setTableTopic(userTable);
        // setTableDetail(dataUserTable);
        break;
      case '/admin/quizStore':
        setTableTopic(quizTable);
        // setTableDetail(dataQuizTable);
        break;
      case '/admin/eventList':
        setTableTopic(eventTable);
        // setTableDetail(dataEventTable);
        break;
      default:
        setTableTopic([]);
        break;
    }
  }, [location.pathname]);

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
        {dataUserTable.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-10 gap-4 text-center py-6 border-b'
          >
            <div className='col-span-3'>{item.detail1}</div>
            <div className='col-span-3'>{item.detail2}</div>
            <div className='col-span-1'>{item.detail3}</div>
            <div className='col-span-1'>{item.detail4}</div>
            <div className='flex justify-center items-center gap-8'>
              <button>
                <LuPencil className='text-xl text-yellow' />
              </button>
              <button>
                <FaRegTrashAlt className='text-xl text-red' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
