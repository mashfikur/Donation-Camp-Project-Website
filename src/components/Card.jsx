import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const { id, title, category, cardImage, backgroundColor, textColor } = card;
  const navigate=useNavigate()

  const handleClick = id =>{
        navigate(`/details/${id}`)
  }

  return (
    <div onClick={()=>handleClick(id)}  className={`bg-[${backgroundColor}] rounded-md`}>
      <img className="object-cover w-full" src={cardImage} alt="" />
      <div className={`p-3`}>
        <div
          className={`badge capitalize border-none p-2 mb-2 rounded font-medium bg-[${backgroundColor}] text-[${textColor}] `}
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
