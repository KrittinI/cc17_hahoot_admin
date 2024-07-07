import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import adminApi from "../api/admin";
export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [topics, setTopics] = useState([])
  const [heros, setHeros] = useState([])
  const [questions, setQuestions] = useState([])
  const [events, setEvents] = useState([])
  const [users, setUsers] = useState([])
  const [rooms, setRooms] = useState([])
  const [heroContent, setHeroContent] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await adminApi.getAllData()
      setTopics(res.data.topics)
      setHeros(res.data.heros)
      setQuestions(res.data.questions)
      setEvents(res.data.events)
      setUsers(res.data.users)
      setRooms(res.data.rooms)
      setHeroContent(res.data.heros.find(hero => hero.isActive))
    }
    fetchData()
  }, [])
  const value = {
    topics,
    heros,
    questions,
    events,
    users,
    rooms,
    heroContent,
    setTopics,
    setHeroContent,
    setHeros,
    setQuestions,
    setUsers,
    setEvents,
    setRooms
  };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
