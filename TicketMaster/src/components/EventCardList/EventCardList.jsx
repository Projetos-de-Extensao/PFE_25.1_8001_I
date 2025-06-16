import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard/EventCard';
import './EventCard/EventCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

function NextArrow({ onClick }) {
    return (
        <div
            className="custom-arrow next"
            onClick={onClick}
        >
            ❯
        </div>
    );
}

function PrevArrow({ onClick }) {
    return (
        <div
            className="custom-arrow prev"
            onClick={onClick}
        >
            ❮
        </div>
    );
}

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
                        <Link
                            to={`/compra/${event.id}`}
                            className="buy-button"
                            style={{
                                display: "block",
                                margin: "16px auto 0",
                                textAlign: "center"
                            }}
                        >
                            Comprar ingresso
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
