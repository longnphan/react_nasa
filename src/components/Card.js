const Card = ({ date, url, title, explanation }) => {
    return (
        <div className="ui center aligned container">
            <div className="ui raised black inverted segment">
                <img key={date} src={url} alt={title} />
                <h1>{title}</h1>
                <h4>{date}</h4>
                <h3>{explanation}</h3>
            </div>
        </div>
    );
};

export default Card;
