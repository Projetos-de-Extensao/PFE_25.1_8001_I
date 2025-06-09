import { EventCard } from "./EventCard/EventCard";

export default function EventCardList({ events }) {
    return (
        <div className='event-card-list'>
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
}
