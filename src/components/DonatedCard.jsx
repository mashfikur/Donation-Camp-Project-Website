import PropTypes from "prop-types";

const DonatedCard = ({ donated }) => {
  return (
    <div>
      <div>
        <div
          className={`card card-side bg-[${donated.backgroundColor}] rounded-md`}
        >
          <div>
            <img
              src={donated.cardImage}
              alt="Movie"
              className="h-full rounded-md"
            />
          </div>
          <div className="card-body">
            <h3
              className={`p-1 bg-[${donated.backgroundColor}] text-[${donated.textColor}] w-3/12 text-center rounded-md capitalize`}
            >
              {donated.category}
            </h3>
            <h2 className="font-semibold text-xl">{donated.title}</h2>
            <p className={`text-[${donated.textColor}] font-semibold`}>
              ${donated.donationPrice.toFixed(2)}
            </p>
            <div className="card-actions justify-start">
              <button
                className={`btn text-white capitalize bg-[${donated.textColor}] hover:bg-[${donated.textColor}]`}
              >
                View Details
              </button>
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
