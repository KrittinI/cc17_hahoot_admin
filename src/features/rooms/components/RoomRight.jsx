import { useState } from 'react';
import DoughnutChart from '../../../components/DoughnutChart';
import AdminSideBar from '../../admin/components/AdminSideBar';

export default function RoomRight({ rooms, topics }) {
  const answers = {};
  answers.amount = rooms.reduce(
    (a, c) => {
      switch (c.answer) {
        case 'A':
          a[0]++;
          return a;
        case 'B':
          a[1]++;
          return a;
        case 'C':
          a[2]++;
          return a;
        case 'D':
          a[3]++;
          return a;
      }
    },
    [0, 0, 0, 0]
  );

  answers.lables = ['A', 'B', 'C', 'D'];
  const topic = {};
  topic.lables = topics.map((topic) => topic.topicName);
  console.log(topic.lables);
  const arr = new Array(topics.length).fill(0);
  topic.amount = rooms?.reduce((a, c) => {
    a[c.topicId - 1]++;
    return a;
  }, arr);
  console.log(topic.amount);
  const [data, setData] = useState({ ...topic });

  const handleClickData = (name) => {
    switch (name) {
      case 'answer':
        setData({ ...answers });
        break;
      case 'topic':
        setData({ ...topic });
    }
  };

  return (
    <div>
      <div className='flex flex-col gap-2'>
        <div className='bg-white rounded-xl col-span-1 flex flex-col gap-4 p-6 justify-between'>
          <h1 className='text-[#343C6A] w-full text-font-title'>
            Rooms Statistics
          </h1>
          <DoughnutChart amount={data.amount} lables={data.lables} />
        </div>
        <AdminSideBar onClick={handleClickData} />
      </div>
    </div>
  );
}
