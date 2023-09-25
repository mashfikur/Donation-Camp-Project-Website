import { useLoaderData, useParams } from "react-router-dom";
import { getDonations, saveDonations } from "../localStorage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DonationDetails = () => {
  const allCards = useLoaderData();
  const [donated, SetDonated] = useState(false);

  const { ID } = useParams();

  const selected = allCards.find((card) => card.id === ID);
  const handleClick = (id) => {
    saveDonations(id);
    toast.success("Thank you for Donating");
    SetDonated(true);
  };

  useEffect(() => {
    const saved = getDonations();
    const alredyDone = saved.includes(ID);
    SetDonated(alredyDone);
  });

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
              className={`btn border-none text-white capitalize font-semibold rounded-md ${
                donated && "btn-disabled"
              } `}
              style={{ background: `${selected.textColor}`, color: "white" }}
            >
              {donated ? `Donated ❤ ` : `Donate $${selected.donationPrice}`}
            </button>
          </div>
        </div>
        <div className="mt-8 mb-24 ">
          <h3 className="font-semibold text-4xl mb-4">{selected.title}</h3>
          <p className="text-[#0b0b0bb3]">{selected.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
