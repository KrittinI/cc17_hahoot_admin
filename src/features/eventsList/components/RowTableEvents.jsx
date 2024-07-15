import useAdmin from "../../../hooks/useAdmin";

const gridMap = {
  6: "grid-cols-6",
  7: "grid-cols-7",
  10: "grid-cols-10",
  12: "grid-cols-12",
};

export default function RowTableEvents({ event, gridRowTable, onClick, selected }) {
  const { topics } = useAdmin()

  return (
    <div
      className={`grid ${gridMap[gridRowTable]} text-center py-4 border-b ${selected === event?.id ? "bg-lblue rounded-xl" : "bg-white hover:bg-lblue"}`}
    // onClick={() => onClick(event.id,)}
    >
      <div className="col-span-1 text-font-body">{event.id}</div>
      <div className="col-span-3 text-font-body">{event.title}</div>
      <div className="col-span-2 text-font-body">{event.creator}</div>
      <div className="col-span-2 text-font-body">{topics[event?.topicId - 1]?.topicName}</div>
      <div className="col-span-2 text-font-body">{event.quizList}</div>
      <div className="col-span-2 text-font-body">{event.using}</div>
    </div>
  );
}
