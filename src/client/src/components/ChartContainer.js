import "../styles/App.css";
import LineChart from "./LineChart";
import Loader from "./Loader";

const ChartContainer = ({ data, toggleTheme, theme, icon, loaded }) => {
  return (
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
  );
};

export default ChartContainer;
