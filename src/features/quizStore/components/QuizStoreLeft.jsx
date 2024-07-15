import { useState } from "react";
import Table from "../../../components/Table";
import RowTableQuestions from "./RowTableQuestions";
import useAdmin from "../../../hooks/useAdmin";

export default function QuizStoreLeft({ questions, onClick, selected }) {
  const { setQuestions, answerCorrect } = useAdmin();

  const newModel = questions?.map((question) => {
    const newQuestion = {};
    newQuestion.id = question.id;
    newQuestion.title = question.question;
    newQuestion.creator = question.user.username;
    newQuestion.topicId = question.topicId;
    newQuestion.quizList = question._count.assignOfBridges;
    const find = answerCorrect?.find((answer) => question.id === answer.questionId)
    if (find) {
      newQuestion.correct = find?._count.answer
      newQuestion.incorrect = +question._count.AnswerOfBridge - +find?._count.answer
      newQuestion.percent = ((newQuestion.correct * 100) / (newQuestion.correct + newQuestion.incorrect))
    } else {
      newQuestion.correct = 0
      newQuestion.incorrect = 0
      newQuestion.percent = 0
    }
    return newQuestion;
  });

  const [sortedData, setSortedData] = useState(newModel);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: true,
  });

  const quizTable = [
    { title: "No.", colSpan: 1, name: "id" },
    { title: "Title", colSpan: 2, name: "title" },
    { title: "Create By", colSpan: 1, name: "creator" },
    { title: "Topic", colSpan: 1, name: "topicId" },
    { title: "Using", colSpan: 1, name: "quizList" },
    { title: "Percent", colSpan: 1, name: "percent" },
  ];

  const handleSort = (key, direction) => {
    setSortConfig({ key, direction: !direction });
    const sortingData = newModel.sort((a, b) => {
      if (direction) {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        if (a[key] === b[key]) return 0;
      } else {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        if (a[key] === b[key]) return 0;
      }
    });
    setSortedData(sortingData);
  };

  const handleClickChangeStatus = (id) => {
    const data = [...questions];
    const mockdata = [...sortedData];
    const foundIndex = data.findIndex((el) => el.id === id);
    const foundMockIndex = mockdata.findIndex((el) => el.id === id);
    data.splice(foundIndex, 1, {
      ...data[foundIndex],
      isActive: !data[foundIndex].isActive,
    });
    mockdata.splice(foundMockIndex, 1, {
      ...mockdata[foundMockIndex],
      isActive: !mockdata[foundMockIndex].isActive,
    });
    setQuestions(data);
    setSortedData(mockdata);
  };

  return (
    <div>
      <Table
        title={`Questions`}
        header={quizTable}
        gridCols={"7"}
        handleSort={handleSort}
        sortConfig={sortConfig}
      >
        {sortedData.map((question) => (
          <RowTableQuestions
            key={question.id}
            onClick={onClick}
            selected={selected}
            question={question}
            gridRowTable={"7"}
            onConfirm={handleClickChangeStatus}
          />
        ))}
      </Table>
    </div>
  );
}
