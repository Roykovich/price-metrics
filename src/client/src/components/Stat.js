// import { useState } from "react";
import Loader from "./Loader";

const Stat = ({ data, loaded }) => {
  return (
    <div className="stat">
      {loaded === true ? (
        <>
          <h3 className="server">{data.label}</h3>
          <h1 className="gold_price">${data.data[0]}</h1>
          <h2 className="tracker">numerito</h2>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Stat;
