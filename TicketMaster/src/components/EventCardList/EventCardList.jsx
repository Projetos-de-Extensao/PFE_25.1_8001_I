import { EventCard } from "./EventCard/EventCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function EventCardList({ events }) {
    const uniqueEvents = Array.from(new Map(events.map(e => [e.id, e])).values());

    return (
        <div className="event-card-list">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {uniqueEvents.map(event => (
                    <SwiperSlide key={event.id}>
                        <EventCard event={event} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
