import icon from '../assets/icon-hh.png';

export default function Title({ selectedQuizDetail }) {
  const titleDetail = [
    {
      image: icon,
      title: 'Title1',
      detail: 'Withdraw without any card',
      color: 'bg-[#FFE0EB]',
    },
    {
      image: icon,
      title: 'Title2',
      detail: 'Choose another pin code',
      color: 'bg-[#E7EDFF]',
    },
    {
      image: icon,
      title: 'Title3',
      detail: 'Instantly block your card',
      color: 'bg-[#FFF5D9]',
    },
    {
      image: icon,
      title: 'Title4',
      detail: 'Withdraw without any card',
      color: 'bg-[#DCFAF8]',
    },
  ];

  const updatedTitleDetail = selectedQuizDetail
    ? [
        {
          image: selectedQuizDetail.profileImage,
          title: selectedQuizDetail.name,
          detail: selectedQuizDetail.topic,
          color: 'bg-[#D1E8FF]',
        },
      ]
    : titleDetail;

  return updatedTitleDetail.map((item, index) => (
    <div key={index} className='flex gap-4 alight-center p-2'>
      <div className={`w-[60px] h-[60px] p-2 rounded-[20px] ${item.color}`}>
        <img src={item.image} alt='' />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='  text-[16px]'>{item.title}</div>
        <div className='  text-[15px] text-[#718EBF]'>{item.detail}</div>
      </div>
    </div>
  ));
}
