import { useState } from 'react';
import RowTable from "./RowTable";

const gridMap = {
  7: "grid-cols-7",
  8: "grid-cols-8",
  12: "grid-cols-12"
};

const colSpanMap = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

export default function Table({ title, header, data, gridCols, }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  console.log(header);
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
      <div className="bg-white p-4 rounded-xl">
        <h1 className="bg-white text-font-title ">{title}</h1>
        <div className={`grid ${gridMap[gridCols]} py-2 pl-1 text-center text-font-title-card text-[#718EBF] justify-around`}>
          {header.map((table, index) => (
            <div key={index} className={colSpanMap[table.colSpan]}>
              {table.title}
            </div>
          ))}
        </div>
        <hr className="shadow-2" />
        {data.map((item, index) => (
          <RowTable
            key={index}
            item={item}
            gridRowTable={'7'}

          // onBanUser={handleBanUser}
          // onUnBanUser={handleUnBanUser}
          // setSelectedUser={setSelectedUser}
          />
        ))}
      </div>
    </div>
  );
}
