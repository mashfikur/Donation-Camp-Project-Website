import { useEffect, useState } from "react";
import { getDonations } from "../localStorage";
import DonatedCard from "./DonatedCard";

const Donations = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);

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

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-5">
        {displayDonations.map((donated) => (
          <DonatedCard key={donated.id} donated={donated}></DonatedCard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
