import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";
import { getDonations } from "../localStorage";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Legend);

const Statistics = () => {
  const allData = useLoaderData();
  const localData = getDonations();

  const [total, setTotal] = useState(0);
  const [yourTotal, setYourTotal] = useState(0);

  const findTotal = (arr) => {
    let all = 0;

    for (let data of arr) {
      all += data.donationPrice;
    }

    return all;
  };

  useEffect(() => {
    const result = findTotal(allData);
    setTotal(result);
  }, [allData]);

  useEffect(() => {
    const emptyArray = [];
    if (localData.length > 0) {
      for (let ID of localData) {
        const selected = allData.find((data) => data.id == ID);

        if (selected) {
          emptyArray.push(selected);
        }
      }
    }

    const result = findTotal(emptyArray);

    setYourTotal(result);
  }, [allData, localData]);

  const data = {
    labels: ["Your Donation", "Total Donation"],
    datasets: [
      {
        data: [yourTotal, total],
        backgroundColor: ["#00C49F", "#FF444A"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  // Calculate the total sum of data values
  const totalSum = data.datasets[0].data.reduce((a, b) => a + b, 0);

  // Calculate the percentage for each data value
  const percentages = data.datasets[0].data.map((value) =>
    ((value / totalSum) * 100).toFixed(2)
  );

  // Customize the labels with percentages
  data.labels = data.labels.map((label, index) => {
    return `${label} (${percentages[index]}%)`;
  });

  return (
    <div className="container mx-auto my-10">
      <div className="p-3 mx-auto md:w-1/2  xl:w-1/3 ">
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
};

export default Statistics;
