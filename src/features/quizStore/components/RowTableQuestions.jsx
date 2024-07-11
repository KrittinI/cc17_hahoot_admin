import { useState } from "react";
import Modal from "../../../components/Modal";
import BannedUser from "../../../components/BannedUser";
import DeleteIcon from "../../../icons/delete";
import useAdmin from "../../../hooks/useAdmin";

const gridMap = {
  6: "grid-cols-6",
  7: "grid-cols-7",
  10: "grid-cols-10",
  12: "grid-cols-12",
};

export default function RowTableQuestions({ question, gridRowTable, onConfirm, onClick, selected }) {
  const { topics } = useAdmin()
  const [open, setOpen] = useState(false);

  const onAgree = () => {
    onConfirm(question?.id);
    setOpen(false);
  };

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
      <div role="button" className="col-span-1 text-font-body ">
        <div
          className="flex justify-center items-center text-center "
          onClick={() => setOpen(true)}
        >
          <DeleteIcon />
        </div>
      </div>
      <div className="grid gap-4">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={<div className="flex flex-col justify-center items-center gap-8">
            <div className="w-[80%] text-center">
              Are you want to delete this Question
            </div>
            <div className="w-[90px] h-[90px] border-4 border-red rounded-full justify-center items-center flex">
              <DeleteIcon size={10} />
            </div>
          </div>
          }
        >
          <BannedUser
            onConfirm={onAgree}
            onCancel={() => setOpen(false)}
            isActive={question[5]}
          />
        </Modal>
      </div>
    </div>
  );
}

