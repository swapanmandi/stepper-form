import React, { useContext } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";
export default function Personal() {
  const { personalData, setPersonalData } = useContext(DataContext);

  const handleOnChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" w-full h-[dvh] flex items-center justify-center">
      <form className="bg-slate-700 min-w-[40lvw] min-h-[50lvh] rounded-md p-2">
        <fieldset className="  flex flex-col justify-start flex-wrap">
          <legend>Personal Info</legend>
          <div className=" flex justify-start items-center ">
            <label className=" m-1">Full Name:</label>
            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[30dvw]"
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={personalData.fullName}
              onChange={handleOnChange}
            ></input>
          </div>
          <div className=" flex justify-start items-center ">
            <label>Age:</label>
            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[30dvw]"
              type="number"
              name="age"
              placeholder="Your Age"
              value={personalData.age}
              onChange={handleOnChange}
            ></input>
          </div>
          <div className=" flex justify-start items-center">
            <label>Gender:</label>
            <select
              className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[30dvw]"
              name="gender"
              value={personalData.gender}
              onChange={handleOnChange}
            >
              <option>--Select--</option>
              <option value="Male"> Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className=" flex justify-start items-center">
            <label>Email:</label>
            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[30dvw]"
              type="email"
              name="email"
              placeholder="Your Email"
              value={personalData.email}
              onChange={handleOnChange}
            ></input>{" "}
          </div>
          <div className=" flex justify-start items-center">
            <label>Mobile:</label>

            <input
              className=" bg-slate-100 p-1 rounded-md text-black m-2 w-full lg:w-[30dvw]"
              type="tel"
              name="mobile"
              placeholder="Your Mobile No"
              value={personalData.mobile}
              onChange={handleOnChange}
            ></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
