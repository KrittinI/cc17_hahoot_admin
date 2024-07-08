import EventsListLeft from "../features/eventsList/components/EventsListLeft";
import EventsListRight from "../features/eventsList/components/EventsListRight";
import useAdmin from "../hooks/useAdmin";
import SplitScreen from "../layouts/SplitScreen";

export default function EventListPage() {
  const { events, topics } = useAdmin()
  return (
    <div className="w-[65%] mx-auto">
      <SplitScreen>
        <EventsListLeft events={events} topics={topics} />
        <EventsListRight events={events} topics={topics} />
      </SplitScreen>
    </div>
  );
}
