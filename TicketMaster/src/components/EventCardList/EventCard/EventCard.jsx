import "./eventcard.css";

export function EventCard({ event }) {
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    // Garante que teams sempre será um array
    const teams = event.teams || (event.title ? event.title.split(' x ') : []);

    return (
        <div className="event-card">
            {event.image && (
                <img
                    src={event.image}
                    alt={event.title}
                    className="event-card__image"
                    style={{ width: "100%", borderRadius: "12px 12px 0 0", marginBottom: "12px" }}
                />
            )}
            <div className="event-card__header">
                <span className="event-card__competition">{event.competition}</span>
                <span className="event-card__date">{formattedDate}</span>
            </div>
            <div className="event-card__teams">
                <span>{teams[0] || ""}</span>
                <span className="event-card__vs">vs</span>
                <span>{teams[1] || ""}</span>
            </div>
            <div className="event-card__location">{event.location}</div>
            <button className="event-card__button">Comprar Ingresso</button>
        </div>
    );
}
