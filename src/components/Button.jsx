import React, { useContext } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";

export default function Button({ data }) {
  const {
    currentStep,
    setCurrentStep,
    stepLength,
    setPersonalData,
    setAddress,
  } = useContext(DataContext);

  const handleBackButton = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleNextButton = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubitButton = () => {
    alert("Form is Successfully Submitted!");

    setCurrentStep(0);
    setPersonalData({
      fullName: "",
      age: "",
      gender: "",
      email: "",
      mobile: "",
    });
    setAddress({
      street: "",
      city: "",
      district: "",
      pin: "",
    });
  };
  return (
    <div>
      {currentStep > 0 && (
        <button
          className=" bg-red-400 p-1 m-2 rounded-md px-2 text-black"
          onClick={handleBackButton}
        >
          Back
        </button>
      )}
      {currentStep < stepLength - 1 && (
        <button
          disabled={Object.values(data).some((value) => value.trim() === "")}
          className={`bg-emerald-500 p-1 m-2 rounded-md px-2 text-black ${
            Object.values(data).some((value) => value.trim() === "")
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-emerald-500 hover:bg-emerald-600"
          }`}
          onClick={handleNextButton}
        >
          Next
        </button>
      )}
      {currentStep == stepLength - 1 && (
        <button
          className=" bg-blue-600 p-1 m-2 rounded-md px-2 text-black"
          onClick={handleSubitButton}
        >
          Submit
        </button>
      )}
    </div>
  );
}
