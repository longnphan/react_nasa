import React from "react";
import Card from "./Card";

function CardList({ photos }) {
    const { date, url, title, explanation } = photos;

    return (
        <div>
            <Card
                key={date}
                url={url}
                title={title}
                date={date}
                explanation={explanation}
            />
        </div>
    );
}

export default CardList;
