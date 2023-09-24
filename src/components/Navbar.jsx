import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex mt-3 lg:my-10 flex-col gap-4 lg:gap-0 md:px-4 xl:px-0  md:flex-row items-center justify-between">
        <div>
          <img src="https://i.ibb.co/0hjtH3Y/Logo.png" alt="" />
        </div>
        <div className="flex items-center gap-10 font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/donation">Donation</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
