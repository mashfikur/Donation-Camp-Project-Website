import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { title, category, cardImage, backgroundColor, textColor } = card;

  console.log(backgroundColor, textColor);
  return (
    <div className={`bg-[${backgroundColor}] rounded-md`}>
      <img className="object-cover w-full" src={cardImage} alt="" />
      <div className={`p-3`}>
        <div
          className={`badge capitalize border-none font-medium bg-[${backgroundColor}]`}
        >
          {category}
        </div>

        <h3 className={`font-semibold text-xl text-[${textColor}]`}>{title}</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
