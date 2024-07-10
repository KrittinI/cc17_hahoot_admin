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

  const handleSetUserData = (labels, amount) => {
    setDataLabels(labels)
    setDataAmount(amount)
  }

  const handelSetMenuData = (labels, amount) => {
    setDataLabels(mockLables.active)
    setDataAmount(isActiveAmount)
  }

  return (
    <div className='w-[65%] mx-auto'>
      <SplitScreen >
        <UsersProfileLeft users={users} onClick={handleSetUserData} />
        <UsersProfileRight users={users} lables={dataLables} amount={dataAmount} onClick={handelSetMenuData} />
      </SplitScreen>
    </div>
  );
}
