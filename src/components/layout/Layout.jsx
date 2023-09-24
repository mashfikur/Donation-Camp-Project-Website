import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h3>This is header</h3>
      <Outlet></Outlet>
      <h3>This is footer</h3>
    </div>
  );
};

export default Layout;
