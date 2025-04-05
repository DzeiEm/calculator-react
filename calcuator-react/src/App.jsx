import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    console.log("input identifir", { inputIdentifier });
    console.log("value", { newValue });
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput, //pasiimu visas "senas" reiksmes
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInputValue={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter duration more than zero</p>
      )}
      {inputIsValid && <Results userInputValue={userInput} />}
    </>
  );
}

export default App;
