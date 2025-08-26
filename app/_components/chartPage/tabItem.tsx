"use client";

import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Tab, Tabs } from "@mui/material";

import { Chart, registerables } from "chart.js";

const TabItemComponent = () => {
  Chart.register(...registerables);

  // --------- line chart ---------

  const lineData = {
    labels: ["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
      {
        label: "پیشبرد",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
      {
        label: "روند پروژه",
        data: [72, 30, 56, 69, 25, 30],
        borderColor: "rgb(48, 214, 27)",
        tension: 0.4,
      },
      {
        label: "درخواست پروژه",
        data: [40, 75, 56, 33, 45, 75],
        borderColor: "rgb(214, 27, 27)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };

  // --------- bar chart ---------

  const barData = {
    labels: ["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
      {
        label: "فروش لحظه ای",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgb(97, 158, 89)",
      },
      {
        label: "مشتری",
        data: [72, 30, 56, 69, 25, 30],
        backgroundColor: "rgb(80, 108, 230)",
      },
      {
        label: "سود ماهیانه",
        data: [40, 75, 56, 33, 45, 75],
        backgroundColor: "rgb(180, 53, 53)",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "نمودار وضعیت پروژه",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const [tabItem, setTabItem] = useState(1);

  return (
    <>
      <Tabs
        value={tabItem}
        onChange={(event: React.SyntheticEvent, value: number) =>
          setTabItem(value)
        }
        textColor="inherit"
        sx={{
          color: "#2d30f0", // Tab text color
          "& .MuiTabs-indicator": {
            backgroundColor: "#5458ff", // Indicator color
          },
        }}
      >
        <Tab value={1} label="پروژه ها" className="IRANSansX-medium" />
        <Tab value={2} label="نمودار فروش" className="IRANSansX-medium" />
      </Tabs>

      {tabItem === 1 && <Line data={lineData} options={lineOptions} />}
      {tabItem === 2 && <Bar data={barData} options={barOptions} />}
    </>
  );
};

export default TabItemComponent;
