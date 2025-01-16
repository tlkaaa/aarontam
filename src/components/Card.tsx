import "./card.scss";

export default function Card({ text }: { text: string }) {
    return (
        <>
            <div className="card">
                <div>
                    <p>{text}</p>
                </div>
                <div className="card__blur--left"></div>
                <div className="card__blur--right"></div>
            </div>
        </>
    );
}
