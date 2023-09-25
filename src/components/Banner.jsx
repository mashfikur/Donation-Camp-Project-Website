import PropTypes from "prop-types";

const Banner = ({ searchBtn, handleSearch }) => {
  return (
    <div>
      <div className="">
        <div className="hero hero-bg">
          <div className="hero-overlay bg-opacity-90 bg-white"></div>
          <div className="hero-content p-0 py-14 xl:py-44 flex flex-col text-center text-black">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="max-w-sm xl:mt-12">
              <div className="join">
                <input
                  ref={searchBtn}
                  type="text"
                  className="input input-bordered focus:outline-none lg:w-[22rem] join-item"
                  placeholder="Search here...., Click search to show All "
                />

                <button
                  onClick={handleSearch}
                  className="btn join-item capitalize text-white border-none  rounded-md search-btn"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  searchBtn: PropTypes.object,
  handleSearch: PropTypes.func,
};

export default Banner;
