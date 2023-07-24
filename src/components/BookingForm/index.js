import React, { useState } from "react";
import VehicleList from "../VehicleList";
import axios from "axios";

import "./index.css";

const BookingForm = () => {
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [date, setDate] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (pointA !== "" && pointB !== "" && date !== "") {
      setIsLoading(true);

      try {
        const response = await axios.get("http://localhost:3002/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Enter all fields");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Airport Transfer Booking</h1>
      <form className="form" onSubmit={handleSearch}>
        <label className="label">
          From:
          <input
            className="input"
            type="text"
            value={pointA}
            onChange={(e) => setPointA(e.target.value)}
            placeholder="Enter Pickup location"
          />
        </label>
        <label className="label">
          To:
          <input
            className="input"
            type="text"
            value={pointB}
            onChange={(e) => setPointB(e.target.value)}
            placeholder="Enter drop location"
          />
        </label>
        <label className="label">
          Date:
          <input
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button className="button" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      <VehicleList vehicles={vehicles} />
    </div>
  );
};

export default BookingForm;
