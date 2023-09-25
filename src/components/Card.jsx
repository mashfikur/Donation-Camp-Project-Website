import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const { id, title, category, cardImage, backgroundColor, textColor } = card;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className={`rounded-md`}
      style={{ background: `${backgroundColor}` }}
    >
      <img className="object-cover w-full" src={cardImage} alt="" />
      <div className={`p-3`}>
        <div
          style={{ background: `${backgroundColor}`, color: `${textColor}` }}
          className={`badge capitalize border-none p-2 mb-2 rounded font-medium  `}
        >
          {category}
        </div>

        <h3
          className={`font-semibold text-xl`}
          style={{ color: `${textColor}` }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
