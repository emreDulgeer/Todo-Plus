import React, { useState, useEffect } from "react";
import axios from "axios";
import WheatherCard from "./WheatherCard";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {}, [data]);

  const fetchData = async (cty) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather/?q=${cty}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Please enter city"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
      {typeof data.weather != "undefined" ? (
        <WheatherCard data={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Weather;
