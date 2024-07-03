import RowTable from './RowTable';

const colSpanMap = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
}

export default function Table({ title, header, data }) {
  return (
    <div>
      <h1 className='bg-white text-2xl font-bold mb-4 text-[#343C6A]'>{title}</h1>
      <div className='bg-white p-2 rounded-xl'>
        <div>
          <div className='grid grid-cols-10  p-2 text-center font-semibold text-[#718EBF]'>
            {header.map((table, index) => (
              <div key={index} className={colSpanMap[table.colSpan]}>
                {table.title}
              </div>
            ))}
          </div>
        </div>
        <hr className='my-4' />
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
