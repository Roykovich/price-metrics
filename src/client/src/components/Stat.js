import { useState } from "react";

const Stat = ({ server, price }) => {
  return (
    <div className="stat">
      <h3 className="server">{server}</h3>
      <h1 className="gold_price">$0.0400</h1>
      <h2 className="tracker">numerito</h2>
    </div>
  );
};

export default Stat;
