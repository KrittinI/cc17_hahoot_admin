import DoughnutChart from "../components/DoughnutChart";
// import RowTable from "../components/RowTable";
import Table from "../components/Table";
import AdminSideBar from "../features/admin/components/AdminSideBar";
import SplitScreen from "../layouts/SplitScreen";

export default function UserProfilePage() {
  const userTable = [
    { title: "No.", colSpan: 1, name: "no" },
    { title: "Username", colSpan: 1, name: "username" },
    { title: "E-Mail", colSpan: 2, name: "email" },
    { title: "Event list", colSpan: 1, name: "events" },
    { title: "Quiz list", colSpan: 1, name: "questions" },
    { title: "Status", colSpan: 1, name: "isActive" },
  ];
  const dataUserTable = [
    {
      detail1: "1",
      detail2: "Spotify",
      detail3: "ssSpotify@gmail.com",
      detail4: "100",
      detail5: "500",
      detail6: "Active",
    },
    {
      detail1: "2",
      detail2: "Spotify",
      detail3: "ssSpotify@gmail.com",
      detail4: "100",
      detail5: "500",
      detail6: "InActive",
    },
    {
      detail1: "3",
      detail2: "Spotify",
      detail3: "ssSpotify@gmail.com",
      detail4: "100",
      detail5: "500",
      detail6: "InActive",
    },
    {
      detail1: "4",
      detail2: "Spotify",
      detail3: "ssSpotify@gmail.com",
      detail4: "100",
      detail5: "500",
      detail6: "Active",
    },
    {
      detail1: "5",
      detail2: "Spotify",
      detail3: "ssSpotify@gmail.com",
      detail4: "100",
      detail5: "500",
      detail6: "Active",
    },
    {
      detail1: "6",
      detail2: "Spotify",
      detail3: "ssSpotify@gmail.com",
      detail4: "100",
      detail5: "500",
      detail6: "Active",
    },
  ];
  const lables = ["active", "inactive"];
  const amount = [300, 200];
  return (
    <>
      <div className=" w-[65%] mx-auto">
        <SplitScreen>
          <Table title={`Users`} header={userTable} data={dataUserTable} gridCols={'7'} />
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl col-span-1 flex flex-col gap-4 p-6 justify-between">
              <h1 className="text-[#343C6A] w-full text-font-title">
                Users Statistics
              </h1>
              <DoughnutChart amount={amount} lables={lables} />
            </div>
            <AdminSideBar />
          </div>
        </SplitScreen>
      </div>
    </>
  );
}
