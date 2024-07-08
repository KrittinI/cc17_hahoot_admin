import { useNavigate } from "react-router-dom";
import MenuTab from "../../../components/MenuTab";
import { IoPerson } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import Logo from "../../../assets/icon-hh.png";
import { FaDiceD6 } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import useAdmin from "../../../hooks/useAdmin";

export default function AdminMenu() {
  const navigate = useNavigate();
  const { users, questions, events, rooms } = useAdmin();


  const handleClick = (path) => {
    navigate(path);
  };
  const allTab = [
    {
      id: 4,
      name: "Overview",
      number: null,
      icon: (
        <BsGraphUpArrow className="bg-[#E7EDFF] text-darkblue rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle" />
      ),
      link: "/admin",
    },
    {
      id: 1,
      name: "Users",
      number: users?.length,
      icon: (
        <IoPerson className="bg-[#DCFAF8] text-[#16DBCC] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle" />
      ),

      link: "/admin/user-profile",
    },
    {
      id: 2,
      name: "Events",
      number: events?.length,
      icon: (
        <PiBagFill className="bg-[#FFE0EB] text-[#FB7185] rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle" />
      ),
      link: "/admin/event-list",
    },
    {
      id: 3,
      name: "Questions",
      number: questions?.length,
      icon: (
        <img
          src={Logo}
          className="bg-[#FFF5D9]  rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle"
        />
      ),
      link: "/admin/quiz-store",
    },

    {
      id: 5,
      name: "Rooms",
      number: rooms?.length,
      icon: (
        <FaDiceD6 className="bg-gray-300 text-black rounded-full p-[15px] w-[64px] h-[64px] flex justify-center align-middle" />
      ),
      link: "/admin/room",
    },
  ];

  return (
    <div className="flex gap-8 justify-between items-center pt-4 w-[65%] mx-auto">
      {allTab.map((item) => (
        <MenuTab
          key={item.id}
          onClick={() => handleClick(item.link)}
          tab={item}
        />
      ))}
    </div>
  );
}
