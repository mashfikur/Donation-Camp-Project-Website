import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="container mx-auto xl:my-24">
      <div className="grid grid-cols-4 gap-5">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
