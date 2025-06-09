import { EventCard } from "./EventCard";

export default function EventCardList({ events }) {
    return (
        <div className='event-card-list'>
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
}