import React, { useState } from "react";

function YearDropdown() {
  const [selectedYear, setSelectedYear] = useState(2023); // Initial selected year

  const years = []; // Array to store years

  // Generate years from 1950 to 2023
  for (let i = 1950; i <= 2023; i++) {
    years.push(i);
  }

  const handleChange = (event) => {
    setSelectedYear(event.target.value); // Update selected year on change
  };

  return (
    <div>
      <label htmlFor="year">Select Year:</label>
      <select id="year" value={selectedYear} onChange={handleChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <p>Selected Year: {selectedYear}</p>
    </div>
  );
}

export default YearDropdown;
