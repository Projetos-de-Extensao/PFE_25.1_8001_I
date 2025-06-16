import React from 'react';
import './EventCard.css';

export default function EventCard({ title, date, category, image, estadio }) {
    return (
        <div className="event-card">
            <img src={image} alt={title} className="event-image" />
            <div className="event-info">
                <h3>{title}</h3>
                <p>Data: {date}</p>
                <p>Categoria: {category}</p>
                <p>Estádio: {estadio}</p> 
            </div>
        </div>
    );
}