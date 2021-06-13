import Stat from "./Stat";

// ? Check line 7
const Stats = ({ data, loaded }) => {
  return (
    <div className="stats">
      {/*? This could be done better. */}
      {loaded === true
        ? data.map((item, index) => {
            return index === 0 ? (
              <Stat
                data={item}
                key={index}
                loaded={loaded}
                modifier={"first"}
              />
            ) : index === 3 ? (
              <Stat data={item} key={index} loaded={loaded} modifier={"end"} />
            ) : (
              <Stat data={item} key={index} loaded={loaded} modifier={""} />
            );
          })
        : (() => {
            let stats = [];
            for (let i = 0; i < 4; i++) {
              stats.push(<Stat loaded={loaded} key={i} />);
            }
            return stats;
          })()}
    </div>
  );
};

export default Stats;
