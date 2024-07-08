import { useState } from "react";
import Table from "../../../components/Table";
import RowTableQuestions from "./RowTableQuestions";
import useAdmin from "../../../hooks/useAdmin";

export default function QuizStoreLeft({ questions, topics }) {
  const { setQuestions } = useAdmin();
  const newModel = questions.map((question) => {
    const newEvent = {};
    newEvent.id = question.id;
    newEvent.title = question.question;
    newEvent.creator = question.user.username;
    newEvent.topicId = question.topicId;
    newEvent.quizList = question._count.assignOfBridges;
    return newEvent;
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
    { title: "Using", colSpan: 1, name: "used" },
    { title: "Action", colSpan: 1, name: "action" },
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
            item={[
              question.id,
              question.title,
              question.creator,
              topics[question.topicId - 1].topicName,
              question.quizList,
              question.isActive,
            ]}
            gridRowTable={"7"}
            onConfirm={handleClickChangeStatus}
          />
        ))}
      </Table>
    </div>
  );
}
