import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../localStorage";
import { useEffect } from "react";

const DonationDetails = () => {
  const allCards = useLoaderData();

  const { ID } = useParams();

  const selected = allCards.find((card) => card.id === ID);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="container mx-auto">
      <div>
        <div
          className="hero flex flex-col justify-end min-h-[70vh] rounded-md"
          style={{
            backgroundImage: `url(${selected.coverImage})`,
          }}
        >
          <div className=" bg-black w-full px-4 py-8 bg-opacity-60">
            <button
              onClick={() => saveDonations(selected.id)}
              className="btn search-btn border-none text-white capitalize font-semibold rounded-md"
            >
              Donate ${selected.donationPrice}
            </button>
          </div>
        </div>
        <div className="mt-8 mb-24">
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
