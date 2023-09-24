import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../localStorage";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const DonationDetails = () => {
  const allCards = useLoaderData();

  const { ID } = useParams();

  const selected = allCards.find((card) => card.id === ID);
  const handleClick = (id) => {
    saveDonations(id);
    toast.success("You have Donated Successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-4 xl:p-0">
      <div>
        <div
          className="hero flex flex-col justify-end min-h-[70vh] rounded-md"
          style={{
            backgroundImage: `url(${selected.coverImage})`,
            backgroundPosition: "center",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        >
          <div className=" bg-black w-full px-4 py-8 bg-opacity-60">
            <button
              onClick={() => handleClick(selected.id)}
              className="btn search-btn border-none text-white capitalize font-semibold rounded-md"
            >
              Donate ${selected.donationPrice}
            </button>
            <Toaster></Toaster>
          </div>
        </div>
        <div className="mt-8 mb-24 ">
          <h3 className="font-semibold text-4xl mb-4">{selected.title}</h3>
          <p className="text-[#0b0b0bb3]">
            {selected.description}
            {selected.description}
            {selected.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;