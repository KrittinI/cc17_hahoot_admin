import DoughnutChart from "../../../components/DoughnutChart";
import AdminSideBar from "../../admin/components/AdminSideBar";

export default function EventsListRight({ events, topics }) {

    const lables = topics.map((topic) => topic.topicName);
    const arr = new Array(topics.length).fill(0)
    const amount = events?.reduce((a, c) => {
        a[c.topicId - 1]++
        return a
    }, arr);
    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="bg-white rounded-xl col-span-1 flex flex-col gap-4 p-6 justify-between">
                    <h1 className="text-[#343C6A] w-full text-font-title">
                        Events Statistics
                    </h1>
                    <DoughnutChart amount={amount} lables={lables} />
                </div>
                <AdminSideBar />
            </div>
        </div>
    )
}
