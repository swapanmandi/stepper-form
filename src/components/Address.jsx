import React, { useContext } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";

export default function Address() {
  const { address, setAddress } = useContext(DataContext);
  const handleOnChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="bg-slate-700 min-w-[40lvw] min-h-[50lvh] rounded-md p-2">
        <fieldset>
          <legend>Address</legend>
          <div className=" flex justify-start items-center max-w-40">
            <label>Street:</label>
            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2"
              type="text"
              name="street"
              placeholder="Street Name"
              value={address.street}
              onChange={handleOnChange}
            />
          </div>
          <div className=" flex justify-start items-center ">
            <label>City:</label>
            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2"
              type="text"
              name="city"
              placeholder="Your City"
              value={address.city}
              onChange={handleOnChange}
            ></input>
          </div>
          <div className=" flex justify-start items-center ">
            <label>District:</label>
            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2"
              type="text"
              name="district"
              placeholder="Your District"
              value={address.district}
              onChange={handleOnChange}
            ></input>
          </div>
          <div className=" flex justify-start items-center ">
            <label>Pin:</label>
            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2"
              minLength="6"
              type="text"
              name="pin"
              placeholder="Pin Code"
              value={address.pin}
              onChange={handleOnChange}
            ></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
