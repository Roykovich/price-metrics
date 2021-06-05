import Stat from "./Stat";

const Stats = ({ data, loaded }) => {
  return (
    <div className="stats">
      {loaded === true
        ? data.map((item) => {
            return (
              <Stat server={item.label} price={item.data} loaded={loaded} />
            );
          })
        : "Loading..."}
    </div>
  );
};

export default Stats;
