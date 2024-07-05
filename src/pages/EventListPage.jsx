import DoughnutChart from "../components/DoughnutChart";
import Table from "../components/Table";
import AdminSideBar from "../features/admin/components/AdminSideBar";
import SplitScreen from "../layouts/SplitScreen";

export default function EventListPage() {
  const eventTable = [
    { title: "No.", colSpan: 1 },
    { title: "Title", colSpan: 3 },
    { title: "Create by", colSpan: 2 },
    { title: "Topic", colSpan: 3 },
    { title: "Quiz list", colSpan: 1 },
    { title: "Action", colSpan: 2},
  ];
  const dataEventTable = [
    {
      detail1: "1",
      detail2: "BlackBean Subscription",
      detail3: "Username",
      detail4: "Mathematics",
      detail5: "500",
      detail6: "edit"
    },    {
      detail1: "2",
      detail2: "BlackBean Subscription",
      detail3: "Username",
      detail4: "Mathematics",
      detail5: "500",
    },
    {
      detail1: "3",
      detail2: "BlackBean Subscription",
      detail3: "Username",
      detail4: "Mathematics",
      detail5: "500",
    },
    {
      detail1: "4",
      detail2: "BlackBean Subscription",
      detail3: "Username",
      detail4: "Mathematics",
      detail5: "500",
    },
    {
      detail1: "5",
      detail2: "BlackBean Subscription",
      detail3: "Username",
      detail4: "Mathematics",
      detail5: "500",
    },
    {
      detail1: "6",
      detail2: "BlackBean Subscription",
      detail3: "Username",
      detail4: "Mathematics",
      detail5: "500",
    },
    {
      detail1: "7",
      detail2: "BlackBean Subscription",
      detail3: "Username",
      detail4: "Mathematics",
      detail5: "500",
    },
  ];
  const lables = ["Topic1", "Topic2", "Topic3", "Topic4", "Topic5"];
  const amount = [30, 25, 15, 6, 7];
  return (
    <div className="w-[65%] mx-auto">
      <SplitScreen>
        <Table title={`Events`} header={eventTable} data={dataEventTable} gridCols={'12'}/>
        <div className="flex flex-col gap-2">
          <div className="bg-white rounded-xl col-span-1 flex flex-col gap-4 p-6 justify-between">
            <h1 className="text-[#343C6A] w-full text-font-title">
              Events Statistics
            </h1>
            <DoughnutChart amount={amount} lables={lables} />
          </div>
          <AdminSideBar />
        </div>
      </SplitScreen>
    </div>
  );
}
