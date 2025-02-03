import { useContext } from "react";

import "./App.css";
import Personal from "./components/Personal";
import Address from "./components/Address";
import Review from "./components/Review";
import ProgressBar from "./components/ProgressBar";
import { DataContext } from "./dataContextStore/DataContextProvider";

function App() {
  const { currentStep, setCurrentStep, stepLength } = useContext(DataContext);

  const handleBackButton = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleNextButton = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubitButton = () => {};

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Personal />;
      case 1:
        return <Address />;
      case 2:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        Stepper Form
        <ProgressBar />
        <div>{renderStep()}</div>
      </div>

      <div>
        {currentStep > 0 && <button onClick={handleBackButton}>Back</button>}
        {currentStep < stepLength - 1 && (
          <button onClick={handleNextButton}>Next</button>
        )}
        {currentStep == stepLength - 1 && (
          <button onClick={handleSubitButton}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default App;
