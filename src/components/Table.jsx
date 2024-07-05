import RowTable from "./RowTable";

const colSpanMap = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

export default function Table({ title, header, data }) {
  return (
    <div>
      <div className="bg-white p-4 rounded-xl">
        <h1 className="bg-white text-font-title ">{title}</h1>
        <div className="grid grid-cols-7 py-2 text-center text-font-title-card text-[#718EBF]">
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
            // onBanUser={handleBanUser}
            // onUnBanUser={handleUnBanUser}
            // setSelectedUser={setSelectedUser}
          />
        ))}
      </div>
    </div>
  );
}
