import { useState } from "react";
import Table from "../../../components/Table";
import RowTableUser from "./RowTableUser";
import useAdmin from "../../../hooks/useAdmin";

export default function UsersProfileLeft({ users, onClick, selected }) {
    const { setUsers } = useAdmin()
    const remodelUsers = users?.map((user) => {
        const newModel = {}
        newModel.id = user.id
        newModel.username = user.username
        newModel.email = user.email
        newModel.isActive = user.isActive
        newModel.events = user._count.events
        newModel.questions = user._count.Questions
        return newModel
    })

    const [sortedData, setSortedData] = useState(remodelUsers)
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: true,
    });

    const userTable = [
        { title: "No.", colSpan: 1, name: "id" },
        { title: "Username", colSpan: 1, name: "username" },
        { title: "E-Mail", colSpan: 2, name: "email" },
        { title: "Quiz list", colSpan: 1, name: "questions" },
        { title: "Event list", colSpan: 1, name: "events" },
        { title: "Status", colSpan: 1, name: "isActive" },
    ];

    const handleSort = (key, direction) => {
        setSortConfig({ key, direction: !direction });
        const sortingData = sortedData?.sort((a, b) => {
            if (direction) {
                if (a[key] < b[key]) return 1
                if (a[key] > b[key]) return -1
                if (a[key] === b[key]) return 0
            } else {
                if (a[key] > b[key]) return 1
                if (a[key] < b[key]) return -1
                if (a[key] === b[key]) return 0
            }
        });
        setSortedData(sortingData)
    };

    const handleClickChangeStatus = (id) => {
        const data = [...users]
        const mockdata = [...sortedData]
        const foundIndex = data.findIndex((el) => el.id === id)
        const foundMockIndex = mockdata.findIndex((el) => el.id === id)
        data.splice(foundIndex, 1, { ...data[foundIndex], isActive: !data[foundIndex].isActive })
        mockdata.splice(foundMockIndex, 1, { ...mockdata[foundMockIndex], isActive: !mockdata[foundMockIndex].isActive })
        setUsers(data)
        setSortedData(mockdata)
    }

    return (
        <div>
            <Table title={`Users`} header={userTable} handleSort={handleSort} gridCols={7} sortConfig={sortConfig}>
                {sortedData?.map((user, index) => (
                    <RowTableUser
                        selected={selected}
                        onClick={onClick}
                        key={index}
                        user={user}
                        gridRowTable={'7'}
                        onConfirm={handleClickChangeStatus}
                    />
                ))}
            </Table>
        </div>
    )
}
