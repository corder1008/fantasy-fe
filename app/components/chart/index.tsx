import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement);

export const TokenomicsChart = () => {
  const data = {
    datasets: [
      {
        data: [20, 10, 20, 50],
        backgroundColor: ["#B01397", "#A62EDE", "#93C5FF", "#93FFD8"],
        hoverBackgroundColor: ["#4ED6B2", "#8CC4D7", "#8B4A9D", "#B76BFF"],
      },
    ],
  };
  return (
    <div className="hidden md:flex relative">
      <Pie data={data} />
      <div className="absolute top-5/12 left-[40px] text-black">
        <p className="font-bold">75%</p>
        <p className="text-[12px]">Private Sale</p>
      </div>
      <div className="absolute right-[40px] text-black top-1/5">
        <p className="font-bold">20%</p>
        <p className="text-[12px]">Reserve Sale</p>
      </div>
      <div className="absolute text-black right-[10px] top-3/7">
        <p className="font-bold">10%</p>
        <p className="text-[12px]">Public Sale</p>
      </div>
      <div className="absolute text-black right-[40px] top-4/6">
        <p className="font-bold">20%</p>
        <p className="text-[12px]">Marketing Sale</p>
      </div>
    </div>
  );
};
