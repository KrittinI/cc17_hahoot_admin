import DoughnutChart from '../../../components/DoughnutChart'
import AdminSideBar from '../../admin/components/AdminSideBar'

export default function UserProfileRight({ lables, amount, onClick }) {
    return (
        <div>
            <div className='flex flex-col gap-2'>
                <div className='bg-white rounded-xl col-span-1 flex flex-col gap-2 p-4 justify-between'>
                    <h1 className="text-[#343C6A] w-full text-font-title">
                        Users Statistics
                    </h1>
                    <DoughnutChart amount={amount} lables={lables} />
                </div>
                <AdminSideBar onClick={onClick} />
            </div>
        </div>
    )
}
