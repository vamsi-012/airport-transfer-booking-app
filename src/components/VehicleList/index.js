import React from "react";
import "./index.css";

const VehicleList = ({ vehicles }) => {
  return (
    <div className="vehicle-list-container">
      <h2 className="vehicle-list-heading">Available Vehicles</h2>
      <div className="cards-container">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="card">
            <img
              src={vehicle.url}
              alt={vehicle.name}
              className="vehicle-image"
            />
            <div className="description">
              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
                <p>Type: {vehicle.type}</p>
              </div>
              <div className="price-capacity">
                <p>Price: {vehicle.price}</p>
                <p>Capacity: {vehicle.seating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
