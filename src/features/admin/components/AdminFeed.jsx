import BarChart from "../../../components/BarChart";
import Button from "../../../components/Button";
import logo from "../../../assets/icon-hh.png";
import HeroBox from "./HeroBox";
import useAdmin from "../../../hooks/useAdmin";

export default function AdminFeed() {
  const { users, questions, events, rooms, topics } = useAdmin();

  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 pt-8">
      <div className="bg-white rounded-xl col-span-2 flex flex-col gap-2 p-4">
        <h1 className="text-font-title">Total</h1>
        <BarChart
          serverData={[
            users?.length,
            events?.length,
            questions?.length,
            rooms?.length,
          ]}
        />
      </div>

      <div className='bg-white rounded-xl col-span-1 flex flex-col p-4 gap-5 '>
        <h1 className='text-font-title sticky'> Topic list</h1>
        <hr className='shadow-2xl text-grey' />
        <div className='flex flex-col max-h-[330px] overflow-y-scroll gap-2'>
          {topics.map((topic) => (
            <Button bg={"white"} key={topic.id}>
              <div className="flex items-center">
                <img src={logo} alt="logo" className="w-8 mr-4" />
                {topic.topicName}
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div className='col-span-3'>
        <HeroBox />
      </div>
    </div>
  );
}
