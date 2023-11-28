import React from "react";
import "./styles.css";

const Result = ({ result }) => {
  return (
    <div className="result">
      <p>Distance Based Cost: {result.totalDistanceCost} €</p>
      <p>Time Based Cost: {result.totalTimeCost} €</p>
      <p>Income: {result.income} €</p>
      <p>
        Profitability (Without Margin): {result.profitabilityWithoutMargin} €
      </p>
      <p>Profitability (With Margin): {result.profitabilityWithMargin} €</p>
    </div>
  );
};

export default Result;
