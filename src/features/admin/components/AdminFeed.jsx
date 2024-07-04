import BarChart from "../../../components/BarChart";
import Button from "../../../components/Button";
// import DoughnutChart from '../../../components/DoughnutChart';
import HeroBox from "./HeroBox";

export default function AdminFeed() {
  const topic = [
    {
      id: 1,
      name: "Coding",
    },
    {
      id: 2,
      name: "Coding",
    },
    {
      id: 3,
      name: "Coding",
    },
    {
      id: 4,
      name: "Coding",
    },
    {
      id: 5,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
    {
      id: 6,
      name: "Coding",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 pt-8">
      <div className="bg-white rounded-xl col-span-2 flex flex-col gap-2 p-4">
        <h1 className="text-font-title">Total</h1>
        <BarChart />
      </div>

      <div className="bg-white rounded-xl col-span-1 flex flex-col p-4 gap-5 ">
        <h1 className="text-font-title sticky"> Topic list</h1>
        <hr className="shadow-2xl text-grey" />
        {/* <DoughnutChart /> */}
        <div className="flex flex-col max-h-[330px] overflow-y-scroll gap-2">
          {topic.map((index) => (
            <Button bg={"white"} key={index.id}>
              <div className="flex items-center">
                <img
                  src="../src/assets/icon-hh.png"
                  alt="logo"
                  className="w-8 mr-4"
                />
                {index.name}
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div className="col-span-3">
        <HeroBox />
      </div>
    </div>
  );
}
