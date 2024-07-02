import { useState } from 'react';
import Image from '../assets/hh-hero.png';

export default function ContentCard({ message }) {
  return (
    <div className=' p-8 rounded-3xl flex flex-col gap-16'>
      <div className='flex flex-col gap-8'>
        <div className='flex gap-8 '>
          <img src={Image} className='w-1/2 h-[256px] rounded-xl' />
          {/* =================================================================== */}
          <div className='w-1/2'>
            <h1 className='text-xl'>Detail</h1>
            <p className='text-blue'>{message?.detail}</p>
          </div>
        </div>
        {/* ########################################################################################### */}
        <div className='flex gap-8'>
          <div className='w-1/2'>
            <h1 className='text-xl'>Title</h1>
            <p className='text-blue'>{message?.title}</p>
          </div>
          {/* =================================================================== */}
          <div className='w-1/2'>
            <h1 className='text-xl'>Create Date</h1>
            <p className='text-blue'>01 July 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
