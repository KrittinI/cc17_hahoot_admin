import { useRef } from 'react';
import defaultImage from '../assets/hh-hero.png';
import { useState } from 'react';

export default function ModalEditContent({ onCancel, message }) {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex gap-16'>
        <div className='w-3/5'>
          <h1>Title</h1>
          <input
            placeholder='we are Hahoot'
            type='text'
            className='bg-white border border-[#86868b] rounded-xl w-full p-2'
            // value={message.title}
          />
          <br />
          {/* <br /> */}
          <h1>Detail</h1>
          <input
            placeholder='we are Hahoot'
            type='text'
            className='bg-white border border-[#86868b] rounded-xl w-full p-2'
            // value={message.detail}
          />
          <br />
          <br />
          <h1>Image</h1>
          <img
            src={imageUrl}
            onClick={handleImageClick}
            className='h-[128px] rounded-xl hover:cursor-pointer'
            alt='Selected'
          />
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <br />
          <div className='flex justify-between gap-8'>
            <div className='w-1/2'>
              <h1>Date</h1>
              <input
                type='datetime-local'
                name='Date'
                id=''
                className='bg-white border border-[#86868b] rounded-xl w-full'
              ></input>
            </div>
          </div>
          <br />
        </div>
        <div className='w-2/5'>
          <div>
            <h1>Card No.1</h1>
            <select className='bg-white border border-[#86868b] rounded-xl w-full p-1 h-12'>
              <option>Please select Title</option>
            </select>
            <br /> <br />
          </div>
          <div>
            <h1>Card No.1</h1>
            <select className='bg-white border border-[#86868b] rounded-xl w-full p-1 h-12'>
              <option>Please select Title</option>
            </select>
            <br /> <br />
          </div>
          <div>
            <h1>Card No.1</h1>
            <select className='bg-white border border-[#86868b] rounded-xl w-full p-1 h-12'>
              <option>Please select Title</option>
            </select>
            <br /> <br />
          </div>
          <div>
            <h1>Card No.1</h1>
            <select className='bg-white border border-[#86868b] rounded-xl w-full p-1 h-12'>
              <option>Please select Title</option>
            </select>
            <br /> <br />
          </div>

          <br />
        </div>
      </div>
      <hr className='border border-gray' />
      <br />
      <div className='flex gap-4 justify-end'>
        <button className='bg-red p-2 rounded-lg w-[80px]' onClick={onCancel}>
          CANCLE
        </button>
        <button className='bg-green p-2 rounded-lg w-[80px]'>EDIT</button>
      </div>
    </div>
  );
}
