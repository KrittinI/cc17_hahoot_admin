import { useState } from "react";
import Table from "../../../components/Table";
import RowTableEvents from "./RowTableEvents";

export default function EventsListLeft({ events, topics }) {
    const newModel = events.map(event => {
        const newEvent = {}
        newEvent.id = event.id
        newEvent.title = event.eventName
        newEvent.creator = event.user.username
        newEvent.topicId = event.topicId
        newEvent.quizList = event._count.assignOfBridges
        return newEvent
    })
    const [sortedData, setSortedData] = useState(newModel)
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: true,
    });
    const eventTable = [
        { title: "No.", colSpan: 1, name: "id" },
        { title: "Title", colSpan: 3, name: "title" },
        { title: "Create by", colSpan: 2, name: "creator" },
        { title: "Topic", colSpan: 3, name: "topicId" },
        { title: "Quiz list", colSpan: 1, name: "quizList" },
        { title: "Action", colSpan: 2, name: "action" },
    ];
    const handleSort = (key, direction) => {
        setSortConfig({ key, direction: !direction });
        const sortingData = newModel.sort((a, b) => {
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
            <Table title={`Events`} header={eventTable} gridCols={'12'} handleSort={handleSort} sortConfig={sortConfig}>
                {sortedData.map((event) =>
                    <RowTableEvents
                        key={event.id}
                        item={[event.id, event.title, event.creator, topics[event.topicId - 1].topicName, event.quizList, event.isActive]}
                        gridRowTable={'12'}
                    />
                )}
            </Table>
        </div>
    )
}
