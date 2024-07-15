import useAdmin from "../hooks/useAdmin";
import SplitScreen from "../layouts/SplitScreen";
import UsersProfileLeft from "../features/usersProfile/components/UsersProfileLeft";
import UsersProfileRight from "../features/usersProfile/components/UsersProfileRight";
import { useState } from "react";

export default function UserProfilePage() {
  const { users } = useAdmin()
  const activeUser = users?.reduce((a, c) => {
    if (c?.isActive) return a += 1
    return a
  }, 0)
  const mockLables = {
    active: ["active", "inactive"],
    users: ["Events", "Questions"]
  };
  const isActiveAmount = [activeUser, users?.length - activeUser];
  const [dataLables, setDataLabels] = useState(mockLables.active)
  const [dataAmount, setDataAmount] = useState(isActiveAmount)
  const [selected, setSelected] = useState("active")

  const handleSetUserData = (select, labels, amount) => {
    setSelected(select)
    setDataLabels(labels)
    setDataAmount(amount)
  }

  const handelSetMenuData = (select, labels) => {
    setSelected(select)
    setDataLabels(mockLables[labels])
    setDataAmount(isActiveAmount)
  }

  return (
    <div className='w-[65%] mx-auto'>
      <SplitScreen >
        <UsersProfileLeft users={users} onClick={handleSetUserData} selected={selected} setDataAmount={setDataAmount} />
        <UsersProfileRight users={users} lables={dataLables} amount={dataAmount} onClick={handelSetMenuData} selected={selected} />
      </SplitScreen>
    </div>
  );
}
