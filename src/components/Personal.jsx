import React, { useContext } from "react";
import {DataContext} from "../dataContextStore/DataContextProvider"
export default function Personal() {

    const {personalData, setPersonalData} = useContext(DataContext)
    
  const handleOnChange = (e) => {
setPersonalData({...personalData, [e.target.name]: e.target.value})
  };

  console.log(personalData.fullName)
  return (
    <div>
      <form>
        <fieldset>
          <legend>Personal Info</legend>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Name"
            value={personalData.fullName}
            onChange={handleOnChange}
          ></input>
           <label>Age:</label>
          <input
            type="text"
            name="age"
            placeholder="Your Age"
            value={personalData.age}
            onChange={handleOnChange}
          ></input>
           <label>Gender:</label>
          <input
            type="text"
            name="gender"
            placeholder="Your Gender"
            value={personalData.gender}
            onChange={handleOnChange}
          ></input>
           <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={personalData.email}
            onChange={handleOnChange}
          ></input> <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            placeholder="Your Mobile No"
            value={personalData.mobile}
            onChange={handleOnChange}
          ></input>
        </fieldset>
      </form>
    </div>
  );
}
