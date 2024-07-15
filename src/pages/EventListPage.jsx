import { useState } from "react";
import EventsListLeft from "../features/eventsList/components/EventsListLeft";
import EventsListRight from "../features/eventsList/components/EventsListRight";
import useAdmin from "../hooks/useAdmin";
import SplitScreen from "../layouts/SplitScreen";

export default function EventListPage() {
  const { events, topics } = useAdmin()

  const mockLables = {};
  const mockAmount = {}

  mockLables.topic = topics.map((topic) => topic.topicName);
  const arr = new Array(topics.length).fill(0)
  mockAmount.topic = events?.reduce((a, c) => {
    a[c.topicId - 1]++
    return a
  }, arr);

  const [dataLables, setDataLabels] = useState(mockLables.topic)
  const [dataAmount, setDataAmount] = useState(mockAmount.topic)
  const [selected, setSelected] = useState("topic")

  const handleSetUserData = (select, labels, amount) => {
    console.log(select);
    console.log(labels);
    console.log(amount);
    setSelected(select)
    setDataLabels(labels)
    setDataAmount(amount)
  }

  const handelSetMenuData = (select) => {
    setSelected(select)
    setDataLabels(mockLables[select])
    setDataAmount(mockAmount[select])
  }

  return (
    <div className="w-[65%] mx-auto">
      <SplitScreen>
        <EventsListLeft events={events} topics={topics} onClick={handleSetUserData} selected={selected} />
        <EventsListRight events={events} lables={dataLables} amount={dataAmount} onClick={handelSetMenuData} selected={selected} />
      </SplitScreen>
    </div>
  );
}
