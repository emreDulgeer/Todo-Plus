import React from "react";

const WheatherCard = ({ data }) => {
  return (
    <div>
      <div className="card " style={{ width: "18rem" }}>
        <img
          className="card-img-top "
          src={
            "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
          }
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.weather[0].description} </p>
          <p className="card-text">{data.main.temp} Celcius</p>
        </div>
      </div>
    </div>
  );
};

export default WheatherCard;
