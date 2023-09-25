import PropTypes from "prop-types";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = ({ cards, searchText }) => {
  const [filterdCard, setFilteredCard] = useState([]);

  useEffect(() => {
    const newArray = [...cards];

    if (searchText) {
      const filtered = cards.filter((card) => card.category === searchText);
      setFilteredCard(filtered);
    } else {
      setFilteredCard(newArray);
    }
  }, [cards, searchText]);

  return (
    <div className="container mx-auto xl:my-24">
      <div className="grid grid-cols-1 p-4 xl:p-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filterdCard.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
  searchText: PropTypes.string,
};

export default Cards;
