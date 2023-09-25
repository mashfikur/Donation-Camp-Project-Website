import { useEffect, useState } from "react";
import { getDonations } from "../localStorage";
import DonatedCard from "./DonatedCard";

const Donations = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((data) => setAllDonations(data));
  }, []);

  useEffect(() => {
    const savedDonations = getDonations();
    if (savedDonations.length > 0) {
      const newArray = [];
      for (let id of savedDonations) {
        const selected = allDonations.find((donation) => donation.id == id);
        if (selected) {
          newArray.push(selected);
        }
      }

      setDisplayDonations(newArray);
    }
  }, [allDonations]);

  const handleClick = () => {
    setDisplayCount(displayDonations.length);
    setHide(!hide);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 p-4 xl:p-0 md:grid-cols-2 gap-5">
        {displayDonations.slice(0, displayCount).map((donated) => (
          <DonatedCard key={donated.id} donated={donated}></DonatedCard>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        {hide ? (
          ""
        ) : (
          <button
            onClick={() => handleClick()}
            className={`btn capitalize text-white bg-[green] hover:bg-[green] ${
              displayDonations.length <= 4 ? "hidden" : ""
            }`}
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donations;
