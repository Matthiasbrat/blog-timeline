import { useRef, useState } from "react";
import Cards from "./Cards";

function Timeline() {

    const ref = useRef(null);
    let [id, setId] = useState(1);
    let allCards = document.getElementsByClassName("card-container");

    const scroll = (event) => {
        if (event.nativeEvent.wheelDelta > 0) {
            id += id < allCards.length && 1;
            let card = document.getElementById("card" + id);
            card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        } else {
            id -= id > 1 && 1;
            let card = document.getElementById("card" + id);
            card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
        setId(id);
    };

    return (
        <div className="timeline" ref={ref} onWheel={(event) => scroll(event)}>
            <Cards currentCard={id} />
        </div>
    );

}

export default Timeline