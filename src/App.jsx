import {useState} from "react";
import "./App.css";

import Header from "./components/Header/Header";
import InterestForm from "./components/InterestForm/InterestForm";

function App() {
  return (
    <main className="flex-column">
      <Header />
      <InterestForm />
    </main>
  );
}

export default App;
