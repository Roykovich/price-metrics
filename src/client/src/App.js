import { useEffect, useState } from "react";
import "./styles/theme.css";
import "./styles/App.css";
import LineChart from "./components/LineChart";
import { randomPrices } from "./generators/generators";

function App() {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState([]); // change this
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const something = function () {
      setTimeout(function () {
        const generatedData = [
          {
            label: "Faerlinas",
            backgroundColor: "rgb(147, 22, 33)",
            borderColor: "rgb(147, 22, 33)",
            data: randomPrices(0.03, 0.05),
          },
          {
            label: "Benediction",
            backgroundColor: "rgb(228, 87, 46)",
            borderColor: "rgb(228, 87, 46)",
            data: randomPrices(0.03, 0.05),
          },
          {
            label: "Earthfury",
            backgroundColor: "rgb(43, 58, 103)",
            borderColor: "rgb(43, 58, 103)",
            data: randomPrices(0.03, 0.05),
          },
          {
            label: "Whitemane",
            backgroundColor: "rgb(122, 199, 79)",
            borderColor: "rgb(122, 199, 79)",
            data: randomPrices(0.03, 0.05),
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
          <button>Horde</button>
        </div>
        <div className="chart-container">
          {loaded === true ? (
            <LineChart datasets={data} theme={theme} />
          ) : (
            "Loading..."
          )}
        </div>
      </div>
      {/* line chart ends */}
      {/* stats starts */}
      <div className="stats">
        <div className="stat_one">
          <h3 className="server">Faerlinas</h3>
          <h1 className="gold_price">$0.05</h1>
        </div>
        <div className="stat_two">
          <h3 className="server">Benediction</h3>
          <h1 className="gold_price">$0.05</h1>
        </div>
        <div className="stat_three">
          <h3 className="server">Earthfury</h3>
          <h1 className="gold_price">$0.05</h1>
        </div>
        <div className="stat_four">
          <h3 className="server">Whitemane</h3>
          <h1 className="gold_price">$0.05</h1>
        </div>
      </div>
      {/* stats ends */}
    </div>
  );
}

export default App;
