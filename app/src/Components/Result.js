import React from "react";
import "./styles.css";

const Result = ({ result }) => {
  return (
    <div className="result">
      <h2>Results</h2>
      <p>Distance Based Cost: {result.totalDistanceCost}</p>
      <p>Time Based Cost: {result.totalTimeCost}</p>
      <p>Income: {result.income}</p>
      <p>Profitability: {result.profitability}</p>
    </div>
  );
};

export default Result;
