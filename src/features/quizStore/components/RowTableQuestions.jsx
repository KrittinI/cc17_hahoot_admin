import useAdmin from "../../../hooks/useAdmin";

const gridMap = {
  6: "grid-cols-6",
  7: "grid-cols-7",
  10: "grid-cols-10",
  12: "grid-cols-12",
};

export default function RowTableQuestions({ question, gridRowTable, onClick, selected }) {
  const { topics } = useAdmin()

  const correct = question?.correct * 100 / (question?.correct + question?.incorrect)
  const incorrect = question?.incorrect * 100 / (question?.correct + question?.incorrect)


  return (
    <div
      className={`grid ${gridMap[gridRowTable]} text-center py-4 border-b ${selected === question?.id ? "bg-lblue rounded-xl" : "bg-white hover:bg-lblue"}`}
      onClick={() => onClick(question?.id, ["Correct", "Incorrect"], [correct, incorrect])}
    >
      <div className="col-span-1 text-font-body">{question?.id}</div>
      <div className="col-span-2 text-font-body">{question?.title}</div>
      <div className="col-span-1 text-font-body">{question?.creator}</div>
      <div className="col-span-1 text-font-body">{topics[question?.topicId - 1]?.topicName}</div>
      <div className="col-span-1 text-font-body">{question?.quizList}</div>
      <div className="col-span-1 text-font-body">{question?.correct ? (question?.correct * 100 / (question?.correct + question?.incorrect)).toFixed(2) : "N/A"}</div>
    </div>
  );
}

