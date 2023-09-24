import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div>
        <h3 className="text-3xl font-semibold text-center mt-40 mb-16">
          OOPS !! Error
        </h3>
        <p className="font-semibold text-center text-xl">
          IF YOU ARE SEEING THIS PAGE , MEANS THAT THERE IS SOMETHING WRONG, IT IS BEING FIXED.
        </p>

        <div className="flex flex-col items-center my-10">
          <Link to="/" ><button className="btn btn-warning">Go Home</button></Link>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;