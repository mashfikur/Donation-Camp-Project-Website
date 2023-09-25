import PropTypes from "prop-types";
import Card from "./Card";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Cards = ({ cards, searchText }) => {
  const [filterdCard, setFilteredCard] = useState([]);

  useEffect(() => {
    const newArray = [...cards];

    if (searchText) {
      const filtered = cards.filter((card) => card.category === searchText);
      if (filtered.length > 0) {
        setFilteredCard(filtered);
      } else {
        toast.error("No category Found like you searched");
      }
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
