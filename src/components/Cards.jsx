import { useState } from "react";
import datas from "../data/cards.json";

function Cards() {

    const [cards, setCards] = useState(datas);

    return (
        cards.map(({title, author, description, image, tags, person, created, id}) => {
            return (
                <div className="card" key={id}>
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
                            {description}<a>@{person}</a>.
                            <a href="#">#{tags}</a>
                            <br />
                                <time dateTime="2016-1-1">{created.time} - {created.date}</time>
                        </div>
                    </div>
                </div>
            );
        })
    );

}

export default Cards