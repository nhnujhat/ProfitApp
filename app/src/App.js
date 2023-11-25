import React, { useState } from "react";
import Form from "./Components/Form";
import Result from "./Components/Result";

const App = () => {
  const [result, setResult] = useState(null);

  const calculateProfitability = async (data) => {
    const response = await fetch(
      "http://localhost:5277/api/transport/calculate-profitability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    setResult(responseData);
  };

  return (
    <div>
      <h1>Profitability</h1>
      <Form onSubmit={calculateProfitability} />
      {result && <Result result={result} />}
    </div>
  );
};

export default App;
