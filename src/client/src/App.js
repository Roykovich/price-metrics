import { useEffect, useState } from "react";
import "./styles/theme.css";
import "./styles/App.css";
import { randomPrices } from "./generators/generators";

import LineChart from "./components/LineChart";
import Stats from "./components/Stats";
import Loader from "./components/Loader";

function App() {
  const [theme, setTheme] = useState("dark");
  const [icon, setIcon] = useState("☀️");
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]); // change this

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIcon(icon === "☀️" ? "🌑" : "☀️");
  };

  useEffect(() => {
    const something = function () {
      setTimeout(function () {
        const generatedData = [
          {
            label: "Faerlinas",
            backgroundColor: "rgb(147, 22, 33)",
            borderColor: "rgb(147, 22, 33)",
            data: randomPrices(0.03, 0.05),
            get demand() {
              return (
                this.data[this.data.length - 1] -
                this.data[this.data.length - 2]
              ).toFixed(5);
            },
          },
          {
            label: "Benediction",
            backgroundColor: "rgb(228, 87, 46)",
            borderColor: "rgb(228, 87, 46)",
            data: randomPrices(0.03, 0.05),
            get demand() {
              return (
                this.data[this.data.length - 1] -
                this.data[this.data.length - 2]
              ).toFixed(5);
            },
          },
          {
            label: "Earthfury",
            backgroundColor: "rgb(43, 58, 103)",
            borderColor: "rgb(43, 58, 103)",
            data: randomPrices(0.03, 0.05),
            get demand() {
              return (
                this.data[this.data.length - 1] -
                this.data[this.data.length - 2]
              ).toFixed(5);
            },
          },
          {
            label: "Whitemane",
            backgroundColor: "rgb(122, 199, 79)",
            borderColor: "rgb(122, 199, 79)",
            data: randomPrices(0.03, 0.05),
            get demand() {
              return (
                this.data[this.data.length - 1] -
                this.data[this.data.length - 2]
              ).toFixed(5);
            },
          },
        ];
        setData([...generatedData]);
        setLoaded(true);
      }, 3000);
    };

    something();
  }, []);

  return (
    <div className={`App ${theme}`}>
      {/* Line chart starts */}
      <div className="linechart">
        <div className="choose_faction">
          <button>Alliance</button>
          <div onClick={toggleTheme}>{icon}</div>
          <button>Horde</button>
        </div>
        <div className="chart-container">
          {loaded === true ? (
            <LineChart datasets={data} theme={theme} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      {/* line chart ends */}
      {/* stats starts */}
      <Stats data={data} loaded={loaded} />
      {/* stats ends */}
    </div>
  );
}

export default App;
