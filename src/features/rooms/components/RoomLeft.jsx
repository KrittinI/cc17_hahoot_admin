import Table from '../../../components/Table';
import RowTableRooms from './RowTableRooms';
import { useState } from 'react';

export default function RoomLeft({ rooms, topics }) {
  const newModel = rooms.map((room) => {
    const newEvent = {};
    newEvent.id = room.id;
    newEvent.title = room.title;
    newEvent.creator = room.user.username;
    newEvent.topicId = room.topicId;
    newEvent.quizList = room._count.assignOfBridges;
    return newEvent;
  });
  const [sortedData, setSortedData] = useState(newModel);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: true,
  });
  const roomsTable = [
    { title: 'No', colSpan: 2, name: 'id' },
    { title: 'Topic', colSpan: 2, name: 'topic' },
    { title: 'Create by', colSpan: 2, name: 'creator' },
    { title: 'Status', colSpan: 2, name: 'status' },
  ];
  const handleSort = (key, direction) => {
    setSortConfig({ key, direction: !direction });
    const sortingData = newModel.sort((a, b) => {
      if (direction) {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        if (a[key] === b[key]) return 0;
      } else {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        if (a[key] === b[key]) return 0;
      }
    });
    console.log(sortingData);
    setSortedData(sortingData);
  };
  return (
    <div>
      <Table
        title={`Room`}
        header={roomsTable}
        gridCols={'8'}
        handleSort={handleSort}
        sortConfig={sortConfig}
      >
        {sortedData.map((room) => (
          <RowTableRooms
            key={room.id}
            item={[
              room.id,
              room.title,
              room.creator,
              topics[room.topicId - 1].topicName,
              room.isActive,
            ]}
            gridRowTable={'8'}
          />
        ))}
      </Table>
    </div>
  );
}
