import {useState} from "react";
import "./App.css";

import Header from "./components/Header/Header";
import InterestForm from "./components/InterestForm/InterestForm";
import ResultsList from "./components/ResultsList/ResultsList";

function App() {
  const [interestData, setInterestData] = useState({type: 0, data: []});
  const formSubmit = (data) => {
    console.dir(data);
    setInterestData(data);
  };

  return (
    <main className="flex-column">
      <Header />
      <InterestForm
        onSubmitHandler={(data) => {
          formSubmit(data);
        }}
      />
      <ResultsList interestData={interestData} />
    </main>
  );
}

export default App;
