import React, { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const handleCalculateAge = () => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthDate).getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator-container">
      <h2>Age Calculator</h2>
      <label htmlFor="birthDate">Enter your birth date: </label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={handleCalculateAge}>Calculate Age</button>
      {age !== null && <p className="result">Your age is: {age}</p>}
    </div>
  );
};

export default AgeCalculator;