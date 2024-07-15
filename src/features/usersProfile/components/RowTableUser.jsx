import { useState } from "react";
import Modal from "../../../components/Modal";
import BannedUser from "../../../components/BannedUser";
import { LockIcon, UnlockIcon } from "../../../icons/Banned";
import adminApi from "../../../api/admin";

const gridMap = {
  6: "grid-cols-6",
  7: "grid-cols-7",
  10: "grid-cols-10",
  12: "grid-cols-12",
};

export default function RowTableUser({ user, gridRowTable, onConfirm, onClick, selected, setDataAmount }) {

  const [open, setOpen] = useState(false);

  const onAgree = (e) => {
    e.stopPropagation()
    onConfirm(user.id);
    if (user?.isActive) {
      adminApi.deactive(user?.id)
      setDataAmount(prev => [prev[0] - 1, prev[1] + 1])
    } else {
      adminApi.active(user?.id)
      setDataAmount(prev => [prev[0] + 1, prev[1] - 1])
    }
    setOpen(false);
  };

  const handleClickRow = (e) => {
    e.stopPropagation()
    onClick(user?.email, ["Events", "Questions"], [user.events, user.questions])
  }

  const handleClickBanUser = (e) => {
    e.stopPropagation()
    setOpen(true)
  }

  const handleClose = (e) => {
    e.stopPropagation()
    setOpen(false)
  }

  return (
    <div
      className={`grid ${gridMap[gridRowTable]} text-center py-4 border-b ${selected === user?.email ? "bg-lblue rounded-xl" : "bg-white hover:bg-lblue"}`}
      onClick={handleClickRow}
      role="button"
    >
      <div className="col-span-1 text-font-body">{user?.id}</div>
      <div className="col-span-1 text-font-body">{user?.username}</div>
      <div className="col-span-2 text-font-body">{user?.email}</div>
      <div className="col-span-1 text-font-body">{user?.questions}</div>
      <div className="col-span-1 text-font-body">{user?.events}</div>
      <div role="button" className="col-span-1 text-font-body ">
        <div
          className="flex justify-center items-center text-center "
          onClick={handleClickBanUser}
        >
          {!user?.isActive ? <LockIcon /> : <UnlockIcon />}
        </div>
      </div>
      <div className="grid gap-4">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={
            user?.isActive ? (
              <div className="flex flex-col justify-center items-center gap-8">
                <div className="w-[80%] text-center">Are you want to Ban this user</div>
                <div className="w-[80px] h-[80px] border-4 border-red rounded-full justify-center items-center flex">
                  <LockIcon size={12} />
                </div>
              </div>
            ) : (

              <div className="flex flex-col justify-center items-center gap-8">
                <div className="w-[80%] text-center">Are you want to Unban this user</div>
                <div className="w-[80px] h-[80px] border-4 border-darkgreen rounded-full justify-center items-center flex">
                  <UnlockIcon size={12} />
                </div>
              </div>

            )
          }
        >
          <BannedUser
            onConfirm={onAgree}
            onCancel={handleClose}
            isActive={user?.isActive}
          />
        </Modal>
      </div>
    </div>
  );
}
