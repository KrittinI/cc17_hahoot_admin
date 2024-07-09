import Table from '../../../components/Table';
import RowTableRooms from './RowTableRooms';
import { useState } from 'react';

export default function RoomLeft({ rooms }) {
  const newModel = rooms.map((room) => {
    const newEvent = {};
    newEvent.id = room.roomId;
    newEvent.title = room.eventId;
    newEvent.creator = room.participantId;
    return newEvent;
  });
  const [sortedData, setSortedData] = useState(newModel);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: true,
  });
  const roomsTable = [
    { title: 'Id', colSpan: 4, name: 'id' },
    { title: 'Event', colSpan: 4, name: 'topic' },
    { title: 'Participant', colSpan: 4, name: 'creator' },
    // { title: 'Status', colSpan: 2, name: 'status' },
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
        gridCols={'12'}
        handleSort={handleSort}
        sortConfig={sortConfig}
      >
        {sortedData.map((room) => (
          <RowTableRooms
            key={room.id}
            item={[room.id, room.title, room.creator, room.isActive]}
            gridRowTable={'12'}
          />
        ))}
      </Table>
    </div>
  );
}
