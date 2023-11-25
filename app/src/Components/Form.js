import React, { useState } from "react";
import "./styles.css";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    pricePerKilometer: "",
    pricePerHour: "",
    kilometers: "",
    hours: "",
    income: "",
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
    };

    onSubmit(convertedData);
  };

  return (
    <div>
      <h2>Input values</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Price per Kilometer:
          <br />
          <input
            type="number"
            name="pricePerKilometer"
            value={formData.pricePerKilometer}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price per Hour:
          <br />
          <input
            type="number"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Kilometers:
          <br />
          <input
            type="number"
            name="kilometers"
            value={formData.kilometers}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hours:
          <br />
          <input
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Income:
          <br />
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
