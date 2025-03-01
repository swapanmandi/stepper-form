import React, { useContext } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";

export default function Review() {
  const { personalData, address } = useContext(DataContext);
  return (
    <div className=" flex justify-center items-center">
      <div className=" bg-slate-700 w-full lg:max-w-[50lvw] min-h-[50lvh] p-1 m-2 rounded-md">
        <h1>Review</h1>
        <div className=" flex flex-col bg-slate-300 text-black p-3 rounded-sm m-2 overflow-hidden">
          <h1 className=" pb-2">Personal Info</h1>
          <div className="">
            <p className=" flex justify-start">
              Full Name: <span className=" px-2">{personalData.fullName}</span>
            </p>
            <p className=" flex justify-start">
              Age: <span className=" px-2">{personalData.age}</span>
            </p>
            <p className=" flex justify-start">
              Gender: <span className=" px-2">{personalData.gender}</span>
            </p>
            <p className=" flex justify-start">
              Email: <span className=" px-2">{personalData.email}</span>
            </p>
            <p className=" flex justify-start">
              Mobile: <span className=" px-2">{personalData.mobile}</span>
            </p>
          </div>
        </div>
        <div className=" bg-slate-300 text-black p-3 rounded-sm m-2">
          <h1 className=" pb-2">Address</h1>
          <p className=" flex justify-start">
            Street: <span className=" px-2">{address.street}</span>
          </p>
          <p className=" flex justify-start">
            City: <span className=" px-2">{address.city}</span>
          </p>
          <p className=" flex justify-start">
            District: <span className=" px-2">{address.district}</span>
          </p>
          <p className=" flex justify-start">
            Pin Code: <span className=" px-2">{address.pin}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
