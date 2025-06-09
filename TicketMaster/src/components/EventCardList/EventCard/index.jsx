export function EventCard({ event }) {
    return (
        <div className="event-card">
            {event.competition}
            {event.teams.map((team, index) => (
                <div key={index} className="team">
                    {team}
                </div>
            ))}
        </div>
    );
}