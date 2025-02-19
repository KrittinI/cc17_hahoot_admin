
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

export default function Table({ title, header, handleSort, gridCols, children, sortConfig }) {

  return (
    <div className="bg-white p-4 rounded-xl">
      <h1 className="bg-white text-font-title ">{title}</h1>
      <div className={`grid ${gridMap[gridCols]} py-2 pl-1 text-center text-font-title-card text-[#718EBF] justify-around`}>
        {header.map((table, index) => (
          <div key={index} className={colSpanMap[table.colSpan]} role='button' onClick={() => handleSort(table.name, sortConfig.direction)}>
            {table.title}
            {sortConfig?.key === table.name
              ? sortConfig?.direction
                ? ' ▲'
                : ' ▼'
              : null}
          </div>
        ))}
      </div>
      <hr className="shadow-2" />
      {children}
    </div>
  );
}
