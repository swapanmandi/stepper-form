import React, { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0)
   const [stepLength, setStepLength] = useState(3);
  const [personalData, setPersonalData] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    mobile: "",
  });

  const [address, setAddress] = useState({
    street: "",
    city: "",
    district: "",
    pin: "",
  });

  return (
    <DataContext.Provider
      value={{ personalData, setPersonalData, address, setAddress, currentStep, setCurrentStep, stepLength }}
    >
      {children}
    </DataContext.Provider>
  );
}
