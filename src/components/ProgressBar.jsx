import React, { useContext, useState } from "react";
import { DataContext } from "../dataContextStore/DataContextProvider";

export default function ProgressBar() {
  const { stepLength, currentStep } = useContext(DataContext);

  return (
    <div className=" flex p-1 m-2 items-center justify-center">
      {[...Array(stepLength)].map((_, index) => (
        <div key={index} className=" flex items-center justify-center -m-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeinejoin="round"
            className={`icon icon-tabler icons-tabler-outline icon-tabler-circle-check ${
              currentStep >= index
                ? "text-emerald-500 transition-all delay-500 ease-linear"
                : " text-white"
            } `}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12l2 2l4 -4" />
          </svg>
          {index < stepLength - 1 && (
            <div
              className={` h-0.5 min-w-[10dvw]  lg:w-32 ${
                currentStep > index
                  ? " bg-emerald-500 transition-all delay-500 ease-linear"
                  : "bg-white"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
