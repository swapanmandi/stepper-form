import { useContext } from "react";
import Button from "./components/Button";
import "./App.css";
import Personal from "./components/Personal";
import Address from "./components/Address";
import Review from "./components/Review";
import ProgressBar from "./components/ProgressBar";
import { DataContext } from "./dataContextStore/DataContextProvider";

function App() {
  const { personalData, address, currentStep } = useContext(DataContext);

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
    <div className=" flex flex-col justify-center items-center">
      <div>
        <h1 className=" m-2"> Please Fill the Form</h1>
        <ProgressBar />
        <div>{renderStep()}</div>
      </div>
      <Button data={currentStep < 1 ? personalData : address} />
    </div>
  );
}

export default App;
