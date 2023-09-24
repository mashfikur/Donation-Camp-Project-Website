import PropTypes from "prop-types";

const DonatedCard = ({ donated }) => {
  return (
    <div>
      <div>
        <div className={`card card-side bg-[] border-2`}>
          <figure>
            <img
              src={donated.cardImage}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
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
