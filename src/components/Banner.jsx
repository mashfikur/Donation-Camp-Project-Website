const Banner = () => {
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
                  type="text"
                  className="input input-bordered focus:outline-none  join-item"
                  placeholder="Search here...."
                />
                <button className="btn join-item capitalize text-white border-none  rounded-md search-btn">
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

export default Banner;
