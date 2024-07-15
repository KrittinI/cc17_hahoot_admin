import DoughnutChart from '../../../components/DoughnutChart'
import UserSideBar from './UserSideBar'

export default function UserProfileRight({ lables, amount, onClick, selected }) {
    return (
        <div className='flex flex-col gap-2 sticky top-20'>
            <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
                <h1 className="text-[#343C6A] w-full text-font-title">
                    Users Statistics
                </h1>
                <DoughnutChart amount={amount} lables={lables} />
            </div>
            <UserSideBar onClick={onClick} selected={selected} />
        </div>
    )
}
