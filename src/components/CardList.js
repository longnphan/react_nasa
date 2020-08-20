import React from 'react';
import Card from './Card';

function CardList({ photos }) {

    return(
        <div>
          <Card
            key={photos.date}
            url={photos.url}
            title={photos.title}
            date={photos.date}
            explanation={photos.explanation}
            />

        </div>
        );
    }

export default CardList;
