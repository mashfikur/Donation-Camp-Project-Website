import PropTypes from "prop-types";

const Cards = ({ cards }) => {
  return (
    <div className="container mx-auto xl:my-24">
      <h3 className="text-center">Cards : {cards.length} </h3>
      <div>
        {
            cards.map(card=><li key={card.id} >Hello</li>)
        }
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
