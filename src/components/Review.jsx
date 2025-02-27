import React, { useContext } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";

export default function Review() {
  const { personalData, address } = useContext(DataContext);
  return (
    <div className=" flex justify-center items-center">
      <div className=" bg-slate-700 min-w-[50lvw] min-h-[50lvh] p-1 m-2 rounded-md">
        <h1>Review</h1>
        <div className=" flex flex-col bg-slate-300 text-black p-1 rounded-sm m-2">
          <h1 className=" ">Personal Info</h1>
          <div className="">
            <p className=" flex justify-start">
              Full Name: <span className="">{personalData.fullName}</span>
            </p>
            <p className=" flex justify-start">
              Age: <span>{personalData.age}</span>
            </p>
            <p className=" flex justify-start">
              Gender: <span>{personalData.gender}</span>
            </p>
            <p className=" flex justify-start">
              Email: <span>{personalData.email}</span>
            </p>
            <p className=" flex justify-start">
              Mobile: <span>{personalData.mobile}</span>
            </p>
          </div>
        </div>
        <div className=" bg-slate-300 text-black p-1 rounded-sm m-2">
          <h1 className=" ">Address</h1>
          <p className=" flex justify-start">
            Street: <span className="">{address.street}</span>
          </p>
          <p className=" flex justify-start">
            City: <span>{address.city}</span>
          </p>
          <p className=" flex justify-start">
            District: <span>{address.district}</span>
          </p>
          <p className=" flex justify-start">
            Pin Code: <span>{address.pin}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
