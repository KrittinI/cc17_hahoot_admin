import useAdmin from "../hooks/useAdmin";
import SplitScreen from "../layouts/SplitScreen";
import UsersProfileLeft from "../features/usersProfile/components/UsersProfileLeft";
import UsersProfileRight from "../features/usersProfile/components/UsersProfileRight";

export default function UserProfilePage() {
  const { users } = useAdmin()

  return (
    <div className='w-[65%] mx-auto'>
      <SplitScreen >
        <UsersProfileLeft users={users} />
        <UsersProfileRight users={users} />
      </SplitScreen>
    </div>
  );
}
