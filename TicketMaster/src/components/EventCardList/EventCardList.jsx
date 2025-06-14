import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard/EventCard';
import './EventCard/EventCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...arrowStyle,
                right: '10px'
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...arrowStyle,
                left: '10px'
            }}
            onClick={onClick}
        />
    );
}

const arrowStyle = {
    zIndex: 10,
    width: '30px',
    height: '30px',
    backgroundColor: '#0077b6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
};

export default function EventCardList({ events }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="event-card-carousel">
            <Slider {...settings}>
                {events.map(event => (
                    <div key={event.id}>
                        <EventCard
                            title={event.title}
                            date={event.date}
                            category={event.category}
                            image={event.image}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
