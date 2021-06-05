import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

function LineChart({ datasets, theme }) {
  const chartRef = React.createRef();
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    const canvasRef = chartRef.current.getContext("2d");
    const config = {
      type: "line",
      data: {
        labels,
        datasets,
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              callback: function (value, index, values) {
                return "$" + value.toFixed(5);
              },
            },
          },
        },
      },
    };

    if (theme === "dark") {
      config.options.scales = {
        x: {
          grid: {
            color: "#666666",
          },
        },
        y: {
          grid: {
            color: "#666666",
          },
        },
      };
    }
    Chart.defaults.font.family = "Share Tech Mono";
    Chart.defaults.plugins.legend.position = "right";

    new Chart(canvasRef, config);
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default LineChart;
