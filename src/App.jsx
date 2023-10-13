import {useState} from "react";
import "./App.css";

import Header from "./components/Header/Header";
import InterestForm from "./components/InterestForm/InterestForm";
import ResultsList from "./components/ResultsList/ResultsList";

function App() {
  return (
    <main className="flex-column">
      <Header />
      <InterestForm />
      <ResultsList />
    </main>
  );
}

export default App;
