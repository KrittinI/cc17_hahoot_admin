import DoughnutChart from '../../../components/DoughnutChart'
import AdminSideBar from '../../admin/components/AdminSideBar'

export default function UserProfileRight({ users }) {
    const activeUser = users?.reduce((a, c) => {
        if (c?.isActive) return a += 1
        return a
    }, 0)
    const lables = ["active", "inactive"];
    const amount = [activeUser, users?.length - activeUser];
    return (
        <div>
            <div className='flex flex-col gap-2'>
                <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
                    <h1 className="text-[#343C6A] w-full text-font-title">
                        Users Statistics
                    </h1>
                    <DoughnutChart amount={amount} lables={lables} />
                </div>
                <AdminSideBar />
            </div>
        </div>
    )
}
