import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [country, setCountry] = useState([]);


//By using the useEffect fetch the data
  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => setCountry(data))
  //     .catch((err) => console.error("Something went wrong", err));
  // }, []);


  // By using the axios methods
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  }, []);
  

  return (
    <div>
      <h4>Country App</h4>
      {country.map((country) => (
        <div key={country.cca1}>
          <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
