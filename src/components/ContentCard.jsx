import Image from '../assets/editIcon.png';

export default function ContentCard({ message }) {
  return (
    <>
      <h1 className='text-[#343C6A] text-[22px]'>Edit Home Page content</h1>
      <div className=' bg-white p-8 rounded-tl-3xl flex flex-col gap-16'>
        <div className='flex flex-col gap-8'>
          <div className='flex gap-8 '>
            <img src={Image} className='w-1/2 h-[256px] rounded-xl' />
            {/* =================================================================== */}
            <div className='w-1/2'>
              <h1 className='text-xl'>Detail</h1>

              <div className=' border border-[#DFEAF2] p-2 rounded-xl'>
                {message?.detail}
              </div>
            </div>
          </div>
          {/* ########################################################################################### */}
          <div className='flex gap-8'>
            <div className='w-1/2'>
              <h1 className='text-xl'>Title</h1>
              <div className=' border border-[#DFEAF2] p-2 rounded-xl'>
                {message?.title}
              </div>
            </div>
            {/* =================================================================== */}
            <div className='w-1/2'>
              <h1 className='text-xl'>Create Date</h1>
              <div className='border border-[#DFEAF2] p-2 rounded-xl'>
                01 July 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
