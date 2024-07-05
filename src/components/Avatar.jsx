import picuture from '../assets/user.png';

// export default function Avatar({ src, size = 2.5 }) {
//     return (
//         <img src={src || profileImg} alt="user" className="rounded-full shadow" style={{ width: `${size}rem`, height: `${size}rem` }} />
//     )
// }

export default function Avatar({ src }) {
  return (
    <div className=''>
      <img
        className='w-[34px] h-[34px] rounded-full border-none'
        src={src || picuture}
        alt='avatar'
      />
    </div>
  );
}
