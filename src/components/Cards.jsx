import { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import datas from "../data/cards.json";

function Cards({ currentCard }) {

    const [cards, setCards] = useState(datas);

    const scrollTo = (event) => {
        let card = document.getElementById("card" + currentCard);
        card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    };

    return (
        cards.map(({ title, author, description, image, tags, mentions, created, id }, index) => {
            return (
                <div className="card-container" key={id} id={"card" + id}>
                    {id == currentCard && <button className="timeline-button timeline-button-left" id="timeline-btn-right"><i className='fas fa-angle-left'></i></button>}
                    {index > 0 && <div className="connection-dot-left" key={"cdl" + index}></div>}
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={image} alt="card image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{title}</p>
                                    <p className="subtitle is-6">@{author}</p>
                                </div>
                            </div>
                            <div className="content">
                                <div className="description">
                                    <p>{description}</p>
                                </div>
                                <div className="mentions">
                                    {mentions.map((mention) => { return <a key={id + mention}>@{mention}</a> })}
                                </div>
                                <div className="tags">
                                    {tags.map((tag) => { return <a key={id + tag}>#{tag}</a> })}
                                </div>
                                <time dateTime="2016-1-1">{created.time} - {created.date}</time>
                            </div>
                        </div>
                    </div>
                    {index < cards.length - 1 &&
                        <div className="connection-dot-right" key={"cdr" + index}></div>
                    }
                    {index < cards.length - 1 &&
                        <div className="connection-line"></div>}
                    {id == currentCard && <button className="timeline-button timeline-button-right" id="timeline-btn-righ t"><i className='fas fa-angle-right'></i></button>}
                </div>
            );
        })
    );

}

export default Cards