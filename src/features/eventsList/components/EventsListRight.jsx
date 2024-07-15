import DoughnutChart from "../../../components/DoughnutChart";
import EventSideBar from "./EventSideBar";

export default function EventsListRight({ amount, lables, onClick, selected }) {

    return (
        <div className="flex flex-col gap-2 sticky top-20">
            <div className="bg-white rounded-xl col-span-1 flex flex-col gap-4 p-6 justify-between">
                <h1 className="text-[#343C6A] w-full text-font-title">
                    Events Statistics
                </h1>
                <DoughnutChart amount={amount} lables={lables} />
            </div>
            <EventSideBar onClick={onClick} selected={selected} />
        </div>
    )
}
