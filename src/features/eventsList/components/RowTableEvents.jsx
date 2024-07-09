import { useState } from "react";
import Modal from "../../../components/Modal";
import BannedUser from "../../../components/BannedUser";
import { LockIcon, UnlockIcon } from "../../../icons/Banned";
import DeleteIcon from "../../../icons/delete";

const gridMap = {
  6: "grid-cols-6",
  7: "grid-cols-7",
  10: "grid-cols-10",
  12: "grid-cols-12",
};

export default function RowTableEvents({ item, gridRowTable, onConfirm }) {
  const [open, setOpen] = useState(false);

  const onAgree = () => {
    onConfirm(item[0]);
    setOpen(false);
  };

  return (
    <div className={`grid ${gridMap[gridRowTable]} text-center py-4 border-b`}>
      <div className="col-span-1 text-font-body">{item[0]}</div>
      <div className="col-span-3 text-font-body">{item[1]}</div>
      <div className="col-span-2 text-font-body">{item[2]}</div>
      <div className="col-span-3 text-font-body">{item[3]}</div>
      <div className="col-span-1 text-font-body">{item[4]}</div>
      <div role="button" className="col-span-2 text-font-body ">
        <div
          className="flex justify-center items-center text-center "
          onClick={() => setOpen(true)}
        >
          <DeleteIcon size={6} />
        </div>
      </div>
      <div className="grid gap-4">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="w-[80%] text-center">
                Are you want to delete this event
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
            isActive={item[5]}
          />
        </Modal>
      </div>
    </div>
  );
}
