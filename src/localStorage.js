const getDonations = () => {
  const savedLocal = localStorage.getItem("donations");

  if (savedLocal) {
    return JSON.parse(savedLocal);
  }

  return [];
};

const saveDonations = (id) => {
  const saved = getDonations();

  if (!saved.includes(id)) {
    saved.push(id);
    localStorage.setItem("donations", JSON.stringify(saved));
  }
};


export {getDonations,saveDonations}