import { useState } from 'react';
import RowTable from './RowTable';

const colSpanMap = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
};

export default function Table({ title, header, data }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      let keyA =
        a[`detail${header.findIndex((h) => h.name === sortConfig.key) + 1}`];
      let keyB =
        b[`detail${header.findIndex((h) => h.name === sortConfig.key) + 1}`];

      if (keyA < keyB) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (keyA > keyB) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  return (
    <div>
      {/* ====================== Topic ====================== */}
      <h1 className='bg-white text-2xl font-bold mb-4 text-[#343C6A]'>
        {title}
      </h1>
      <div className='bg-white p-2 rounded-xl'>
        {/* ====================== Header table ====================== */}
        <div>
          <div className='grid grid-cols-10  p-2 text-center font-semibold text-[#718EBF]'>
            {header.map((table, index) => (
              <div
                key={index}
                className={colSpanMap[table.colSpan]}
                onClick={() => handleSort(table.name)}
              >
                {table.title}
                {sortConfig.key === table.name
                  ? sortConfig.direction === 'ascending'
                    ? ' ▲'
                    : ' ▼'
                  : null}
              </div>
            ))}
          </div>
        </div>
        <hr className='my-4' />
        {/* ====================== Data table ====================== */}
        {sortedData.map((item, index) => (
          <RowTable key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
