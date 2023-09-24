import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedCard = ({ donated }) => {
  return (
    <div>
      <div>
        <div
          className={`flex flex-col  lg:flex-row lg:gap-4 bg-[${donated.backgroundColor}] rounded-md`}
        >
          <div className="lg:flex-1">
            <img
              src={donated.cardImage}
              alt="Movie"
              className="h-full rounded-md w-full"
            />
          </div>
          <div className="py-3 px-2 space-y-3 lg:flex-1">
            <div
              className={`badge capitalize border-none p-2 mb-2 rounded font-medium bg-[${donated.backgroundColor}] text-[${donated.textColor}] `}
            >
              {donated.category}
            </div>
            <h2 className="font-semibold text-xl">{donated.title}</h2>
            <p className={`text-[${donated.textColor}] font-semibold`}>
              ${donated.donationPrice.toFixed(2)}
            </p>
            <div className="">
              <Link to={`/details/${donated.id}`} >
                <button
                  className={`btn text-white capitalize bg-[${donated.textColor}] hover:bg-[${donated.textColor}]`}
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  donated: PropTypes.object,
};

export default DonatedCard;
