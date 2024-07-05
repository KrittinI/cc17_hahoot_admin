import { useState } from 'react';
import ContentCard from './ContentCard';
import Modal from '../../../components/Modal';
import QuizCard from './QuizCard';
import EditHeroForm from './EditHeroForm';
import imageQuiz from '../../../assets/editIcon.png';
import imageProfile from '../../../assets/user.png';
// import defaultImage from '../../../assets/hh-hero.png';
import CreateHeroForm from './CreateHeroForm';
import Button from '../../../components/Button';

// const dataContent = {
//   image: defaultImage,
//   title: 'This is Title message',
//   detail: 'This is Detail message. This is Detail message.',
//   quiz1: {
//     image: imageQuiz,
//     topic: 'This is Detail A',
//     profileImage: imageProfile,
//     name: 'Mathematis1',
//   },
//   quiz2: {
//     image: imageQuiz,
//     topic: 'This is Detail B',
//     profileImage: imageProfile,
//     name: 'Mathematis2',
//   },
//   quiz3: {
//     image: imageQuiz,
//     topic: 'This is Detail C',
//     profileImage: imageProfile,
//     name: 'Mathematis3',
//   },
//   quiz4: {
//     image: imageQuiz,
//     topic: 'This is Detail D',
//     profileImage: imageProfile,
//     name: 'Mathematis4',
//   },
//   quiz5: {
//     image: imageQuiz,
//     topic: 'This is Detail E',
//     profileImage: imageProfile,
//     name: 'Mathematis5',
//   },
//   quiz6: {
//     image: imageQuiz,
//     topic: 'This is Detail F',
//     profileImage: imageProfile,
//     name: 'Mathematis6',
//   },
// };

const oneHero = {
  id: 2,
  title: 'Hahoot Maths Days!',
  detail:
    'The National Mathematics Day is celebrated on 22nd December to celebrate the birthday of eminent mathematician Srinivasa Ramanujan. It was designated by the Indian Government in 2011. Despite his lack of formal education, Ramanujan is noted as one of the greatest mathematicians of all time. ',
  eventPicture: null,
  icon: null,
  quiz1: {
    image: imageQuiz,
    topic: 'This is Detail A',
    profileImage: imageProfile,
    name: 'Mathematis1',
  },
  quiz2: {
    image: imageQuiz,
    topic: 'This is Detail B',
    profileImage: imageProfile,
    name: 'Mathematis2',
  },
  quiz3: {
    image: imageQuiz,
    topic: 'This is Detail C',
    profileImage: imageProfile,
    name: 'Mathematis3',
  },
  quiz4: {
    image: imageQuiz,
    topic: 'This is Detail D',
    profileImage: imageProfile,
    name: 'Mathematis4',
  },
  createdAt: '2024-07-05T01:50:50.996Z',
  updatedAt: '2024-07-05T07:14:31.728Z',
  isActive: false,
};

const heros = [
  {
    id: 1,
    title: 'We are Hahoot !',
    detail:
      'The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.',
    eventPicture: null,
    icon: null,
    quiz1: 1,
    quiz2: 21,
    quiz3: 31,
    quiz4: 41,
    createdAt: '2024-07-05T01:50:50.996Z',
    updatedAt: '2024-07-05T09:47:32.015Z',
    isActive: false,
    question1: {
      question:
        'What number makes this number sentence true? 4 x 3 = _____ x 4',
      questionPicture: null,
    },
    question2: {
      question: 'Which sentence is grammatically correct?',
      questionPicture: null,
    },
    question3: {
      question: 'Which sport is known as "the beautiful game"?',
      questionPicture: null,
    },
    question4: {
      question: 'ใครคือผู้แต่งมังงะเรื่อง "Naruto"?',
      questionPicture: null,
    },
  },
  {
    id: 2,
    title: 'Hahoot Maths Days!',
    detail:
      'The National Mathematics Day is celebrated on 22nd December to celebrate the birthday of eminent mathematician Srinivasa Ramanujan. It was designated by the Indian Government in 2011. Despite his lack of formal education, Ramanujan is noted as one of the greatest mathematicians of all time. ',
    eventPicture: null,
    icon: null,
    quiz1: 1,
    quiz2: 2,
    quiz3: 3,
    quiz4: 4,
    createdAt: '2024-07-05T01:50:50.996Z',
    updatedAt: '2024-07-05T09:47:32.015Z',
    isActive: false,
    question1: {
      question:
        'What number makes this number sentence true? 4 x 3 = _____ x 4',
      questionPicture: null,
    },
    question2: {
      question:
        'Spiders are a type of arachnid. Arachnids normally have 8 legs. How many legs on 3 spiders?',
      questionPicture: null,
    },
    question3: {
      question:
        'What number makes this number sentence true? 4 x 3 = _____ x 4',
      questionPicture: null,
    },
    question4: {
      question: 'Which number is an example of a square number?',
      questionPicture: null,
    },
  },
  {
    id: 3,
    title: 'We are Develophoot !',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vestibulum dolor. Donec luctus neque ac odio vehicula, in congue enim volutpat. Nulla facilisi. Mauris eget ipsum ut urna feugiat lacinia ut sed metus. Vestibulum in feugiat erat. Nulla id tincidunt risus, et vestibulum est. Integer auctor velit nec urna malesuada, sed bibendum lacus suscipit. Morbi in rutrum tellus. Sed maximus rhoncus dolor quis viverra. Maecenas auctor rutrum pharetra. Ut sagittis nisl vel purus mattis gravida. Vestibulum imperdiet auctor nisl ut viverra. Quisque vulputate augue tristique, lacinia dui a, posuere purus. Nunc et quam ac leo congue dapibus. Donec aliquam sapien quis interdum hendrerit.',
    eventPicture: null,
    icon: null,
    quiz1: 11,
    quiz2: 12,
    quiz3: 13,
    quiz4: 14,
    createdAt: '2024-07-05T01:50:50.996Z',
    updatedAt: '2024-07-05T09:47:32.015Z',
    isActive: true,
    question1: {
      question: 'What is programming language for C language?',
      questionPicture: null,
    },
    question2: {
      question: 'let a = "1"\nlet b = 2\nlet c = a + b\nWhat is result of c ?',
      questionPicture: null,
    },
    question3: {
      question: 'const result = "" || 100\n\nWhat is result?',
      questionPicture: null,
    },
    question4: {
      question: 'What is command to create new branch in git',
      questionPicture: null,
    },
  },
  {
    id: 4,
    title: 'We are Englishoot !',
    detail:
      "School is a vital part of our lives. It serves as a starting point for our general growth in addition to being a place to acquire reading and writing skills. It helps us learn about the world and moulds our personalities. It's the perfect starting point for our understanding of the real world. Schools are academic institutions where students are taught about various knowledge aspects. As a student, we are often told to write an essay or present a speech at my school. Speech on my school requires you to write some basic details and features of your school, how your life at school was or is, things you have learned there and what was the best part of your school life. Below we have discussed a 1-minute speech on my school for students with a paragraph and some lines that you can add to your speech on my school.",
    eventPicture: null,
    icon: null,
    quiz1: 21,
    quiz2: 22,
    quiz3: 23,
    quiz4: 24,
    createdAt: '2024-07-05T01:50:50.996Z',
    updatedAt: '2024-07-05T09:47:32.015Z',
    isActive: false,
    question1: {
      question: 'Which sentence is grammatically correct?',
      questionPicture: null,
    },
    question2: {
      question:
        ' Choose the correct form of the verb to complete the sentence: "She _____ to the store every Saturday."',
      questionPicture: null,
    },
    question3: {
      question: 'Which sentence uses the correct past tense?',
      questionPicture: null,
    },
    question4: {
      question:
        'Select the correct word to complete the sentence: "They _____ their homework every day."',
      questionPicture: null,
    },
  },
  {
    id: 5,
    title: "Hahoot Sport's Day !",
    detail:
      'Germany coach Julian Nagelsmann says Spain\'s Lamine Yamal is a "talented" and "fun" player - but questioned whether the teenager can cope with the demands of a high stakes Euro 2024 quarter-final.\n\nThe 16-year-old winger has provided two assists for Spain so far, just the third teenager on record (since 1980) to provide multiple assists in the competition after Enzo Scifo (1984) and Cristiano Ronaldo (2004).',
    eventPicture: null,
    icon: null,
    quiz1: 31,
    quiz2: 32,
    quiz3: 33,
    quiz4: 34,
    createdAt: '2024-07-05T01:50:50.996Z',
    updatedAt: '2024-07-05T09:47:32.015Z',
    isActive: false,
    question1: {
      question: 'Which sport is known as "the beautiful game"?',
      questionPicture: null,
    },
    question2: {
      question: 'In which sport would you perform a slam dunk?',
      questionPicture: null,
    },
    question3: {
      question: 'Which country is known for originating the sport of cricket?',
      questionPicture: null,
    },
    question4: {
      question: 'Rugby football was origin in which country?',
      questionPicture: null,
    },
  },
  {
    id: 6,
    title: 'We are ScienceHoot !',
    detail:
      'Peace cannot be kept by force; it can only be achieved by understanding.\n\nAlbert Einstein',
    eventPicture: null,
    icon: null,
    quiz1: 57,
    quiz2: 58,
    quiz3: 59,
    quiz4: 60,
    createdAt: '2024-07-05T01:50:50.996Z',
    updatedAt: '2024-07-05T09:47:32.015Z',
    isActive: false,
    question1: {
      question: 'Who perform this equation?',
      questionPicture:
        'https://st2.depositphotos.com/2110015/10379/v/450/depositphotos_103793594-stock-illustration-mass-energy-equivalence.jpg',
    },
    question2: {
      question: 'Who found gravity?',
      questionPicture: null,
    },
    question3: {
      question: 'Who was developed light blub?',
      questionPicture: null,
    },
    question4: {
      question: 'Who was develeoped AC Current?',
      questionPicture: null,
    },
  },
];

export default function HeroBox() {
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [heroContent, setHeroContent] = useState(oneHero);
  console.log(heroContent);
  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setHeroContent(heroContent);
    setIsEdit(false);
  };

  return (
    <div className='flex flex-col bg-white rounded-xl p-4'>
      <div className='grid grid-cols-3'>
        <div className=' flex flex-col  col-span-2'>
          <ContentCard dataContent={heroContent} />
        </div>
        <div className='flex flex-col col-span-1'>
          <h1 className='text-[#343C6A] text-[22px]'>Free Quiz Card</h1>
          <QuizCard saveQuizDetail={oneHero.quiz1} />
          <QuizCard saveQuizDetail={oneHero.quiz2} />
          <QuizCard saveQuizDetail={oneHero.quiz3} />
          <QuizCard saveQuizDetail={oneHero.quiz4} />
        </div>
      </div>

      {/* =============== MODAL =============== */}

      <div className='flex justify-end'>
        <div className='flex justify-start gap-4 w-full bg-white p-8 rounded-b-3xl'>
          <Button bg={`black`} width={40} onClick={() => setIsCreate(true)}>
            Create
          </Button>
          <Modal
            open={isCreate}
            onClose={() => setIsCreate(false)}
            title={'Create New Hero Content'}
          >
            <CreateHeroForm
              onCancel={() => setIsCreate(false)}
              setHeroContent={setHeroContent}
              handleSave={handleSave}
              heroContent={heroContent}
            />
          </Modal>
          {/* =============================================================================================== */}
          <Button bg={`black`} width={40} onClick={handleEdit}>
            Edit
          </Button>
          <Modal open={isEdit} onClose={() => setIsEdit(false)} title={'EDIT'}>
            <EditHeroForm
              onCancel={() => setIsEdit(false)}
              handleSave={handleSave}
              heroContent={heros}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
