import imageQuiz from "../../../assets/editIcon.png";

import { useState } from "react"

export default function SelectedQuestion({ questions, name, onChange, value }) {

    const [selectQuestion, setSelectQuestion] = useState(null)
    const handleSelectQuestion = (e) => {
        const question = questions.find((quiz) => quiz.id === +e.target.value)
        console.log(question);
        setSelectQuestion(question)
        onChange(e)
    }
    return (
        <div className='flex h-full justify-between items-center shadow-lg  rounded-md overflow-hidden'>
            <img src={selectQuestion?.questionPicture || imageQuiz} className="max-w-[30%] " />
            <select value={value} className='max-w-[70%]  h-full rounded-md' name={name} onChange={handleSelectQuestion}  >
                <option value={0} disabled>Please Select Question</option>
                {questions.map(question => <option className='' key={question.id} value={question.id}>{question.question}</option>)}
            </select>
        </div >
    )
}
