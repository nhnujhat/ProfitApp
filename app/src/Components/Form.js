import React, { useState } from "react";
import "./styles.css";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    pricePerKilometer: "",
    pricePerHour: "",
    kilometers: "",
    hours: "",
    income: "",
    targetProfitMargin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === "")) {
      alert("All fields are required");
      return;
    }

    const convertedData = {
      ...formData,
      pricePerKilometer: parseFloat(formData.pricePerKilometer),
      pricePerHour: parseFloat(formData.pricePerHour),
      kilometers: parseFloat(formData.kilometers),
      hours: parseFloat(formData.hours),
      income: parseFloat(formData.income),
      targetProfitMargin: parseFloat(formData.targetProfitMargin),
    };

    onSubmit(convertedData);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Price per Kilometer (€):
          <br />
          <input
            type="text"
            name="pricePerKilometer"
            value={formData.pricePerKilometer}
            onChange={handleChange}
            inputMode="decimal"
            pattern="[0-9]+([.][0-9]+)?"
          />
        </label>
        <br />
        <label>
          Price per Hour (€):
          <br />
          <input
            type="text"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleChange}
            inputMode="decimal"
            pattern="[0-9]+([.][0-9]+)?"
          />
        </label>
        <br />
        <label>
          Kilometers:
          <br />
          <input
            type="text"
            name="kilometers"
            value={formData.kilometers}
            onChange={handleChange}
            inputMode="decimal"
            pattern="[0-9]+([.][0-9]+)?"
          />
        </label>
        <br />
        <label>
          Hours:
          <br />
          <input
            type="text"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            inputMode="decimal"
            pattern="[0-9]+([.][0-9]+)?"
          />
        </label>
        <br />
        <label>
          Income (€):
          <br />
          <input
            type="text"
            name="income"
            value={formData.income}
            onChange={handleChange}
            inputMode="decimal"
            pattern="[0-9]+([.][0-9]+)?"
          />
        </label>
        <br />
        <label>
          Target profit Margin (%):
          <br />
          <input
            type="text"
            name="targetProfitMargin"
            value={formData.targetProfitMargin}
            onChange={handleChange}
            inputMode="decimal"
            pattern="[0-9]+([.][0-9]+)?"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
