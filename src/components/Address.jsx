import React, { useContext } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";

export default function Address() {
  const { address, setAddress } = useContext(DataContext);
  const handleOnChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    console.log(address.street)
  };
  return (
    <div>
      <form>
        <fieldset>
          <legend>Address</legend>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            placeholder="Street Name"
            value={address.street}
            onChange={handleOnChange}
          ></input>
          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={address.city}
            onChange={handleOnChange}
          ></input>
          <label>District:</label>
          <input
            type="text"
            name="district"
            placeholder="Your District"
            value={address.district}
            onChange={handleOnChange}
          ></input>
          <label>Pin:</label>
          <input
            type="text"
            name="pin"
            placeholder="Pin Code"
            value={address.pin}
            onChange={handleOnChange}
          ></input>
        </fieldset>
      </form>
    </div>
  );
}
