import React, { useContext } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";

export default function Address() {
  const { address, setAddress } = useContext(DataContext);
  const handleOnChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <form className="bg-slate-700 rounded-md p-2 lg:max-w-[50lvw]">
        <legend>Address</legend>
        <div className=" flex items-center">
          <label className=" p-2">Street:</label>
          <input
            className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[25dvw]"
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
            className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[25dvw]"
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
            className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[25dvw]"
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
            className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[25dvw]"
            minLength="6"
            type="text"
            name="pin"
            placeholder="Pin Code"
            value={address.pin}
            onChange={handleOnChange}
          ></input>
        </div>
      </form>
    </div>
  );
}
