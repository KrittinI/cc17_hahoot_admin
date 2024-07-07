import { useState } from "react";
import Table from "../../../components/Table";
import RowTableUser from "../../admin/components/RowTableUser";

export default function UsersProfileLeft({ users }) {
    const remodelUsers = users.map((user) => {
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
        { title: "Event list", colSpan: 1, name: "events" },
        { title: "Quiz list", colSpan: 1, name: "questions" },
        { title: "Status", colSpan: 1, name: "isActive" },
    ];

    const handleSort = (key, direction) => {
        setSortConfig({ key, direction: !direction });
        const sortingData = remodelUsers.sort((a, b) => {
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
    return (
        <div>
            <Table title={`Users`} header={userTable} handleSort={handleSort} gridCols={7} sortConfig={sortConfig}>
                {sortedData.map((user, index) => (
                    <RowTableUser
                        key={index}
                        item={[user.id, user.username, user.email, user.events, user.questions, user.isActive]}
                        gridRowTable={'7'}
                    />
                ))}
            </Table>
        </div>
    )
}
