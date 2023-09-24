import { useEffect, useState } from "react";
import { getDonations } from "../localStorage";

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
      <div>
        {
            displayDonations.map(donations=><li>hello</li>)
        }
      </div>
    </div>
  );
};

export default Donations;
