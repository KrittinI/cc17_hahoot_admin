import imageQuiz from "../../../assets/editIcon.png";

import { useState } from "react";

const paddingMap = {
  2: "p-2",
  4: "p-4",
};

export default function SelectedQuestion({
  questions,
  name,
  onChange,
  value,
  p,
}) {
  const [selectQuestion, setSelectQuestion] = useState(null);
  const handleSelectQuestion = (e) => {
    const question = questions.find((quiz) => quiz.id === +e.target.value);
    console.log(question);
    setSelectQuestion(question);
    onChange(e);
  };
  return (
    <div
      className={`flex h-full justify-between items-center shadow-lg rounded-md overflow-hidden ${paddingMap[p]}`}
    >
      <img
        src={selectQuestion?.questionPicture || imageQuiz}
        className="max-w-[30%] "
      />
      <select
        value={value}
        className="max-w-[70%]  h-full rounded-md"
        name={name}
        onChange={handleSelectQuestion}
      >
        <option value={0} disabled>
          Please Select Question
        </option>
        {questions.map((question) => (
          <option className="" key={question.id} value={question.id}>
            {question.question}
          </option>
        ))}
      </select>
    </div>
  );
}
