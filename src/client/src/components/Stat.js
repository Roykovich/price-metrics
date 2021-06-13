// import { useState } from "react";
import Loader from "./Loader";

const Stat = ({ data, loaded, modifier }) => {
  return (
    <div className={`stat ${modifier}`}>
      {loaded === true ? (
        <>
          <h1 className="server">
            <b>{data.label}</b>
          </h1>
          <h2 className="gold_price">${data.data[0]}</h2>
          <p
            className={`demand ${
              data.demand === 0
                ? "neutral"
                : data.demand > 0
                ? "profit"
                : "deficit"
            }`}
          >
            {data.demand === 0 ? "" : data.demand > 0 ? "+" : "-"}
            {Math.abs(data.demand)}
          </p>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Stat;
