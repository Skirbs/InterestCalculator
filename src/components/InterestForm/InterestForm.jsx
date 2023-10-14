import style from "./InterestForm.module.css";
import Card from "../Card/Card";
import {useState} from "react";

const InterestForm = () => {
  const [interestMode, setInterestMode] = useState(0);

  const changeType = (e) => {
    setInterestMode(parseFloat(e.target.value));
    /* set "required" to compound per year*/
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const currentAmountValue = parseFloat(document.querySelector("#current-amount").value);
    const maxYearValue = parseFloat(document.querySelector("#max-year").value);
    const rateValue = parseFloat(document.querySelector("#rate").value);
    const compoundPerYearValue = parseFloat(document.querySelector("#compound-per-year").value);

    switch (interestMode) {
      case 0 /* Simple Interest */:
        for (let i = 1; i <= maxYearValue; i++) {
          const futureValue = currentAmountValue * (1 + (rateValue / 100) * i);
        }
        break;
      case 1 /* Simple Discount */:
        for (let i = 1; i <= maxYearValue; i++) {
          const futureValue = currentAmountValue * (1 - (rateValue / 100) * i);
        }
        break;
      case 2 /* Compound Interest */:
        for (let i = 1; i <= maxYearValue; i++) {
          for (let j = 1; j <= compoundPerYearValue; j++) {
            const futureValue =
              Math.round(currentAmountValue * Math.pow(1 + rateValue / 100 / j, j * i) * 100) / 100;
            console.log(`Year ${i} (${j}/${compoundPerYearValue}): ${futureValue}`);
          }
        }
        break;
      case 3 /* Annuity */:
        for (let i = 1; i <= maxYearValue; i++) {
          for (let j = 1; j <= compoundPerYearValue; j++) {
            /* Annuity formula */
          }
        }
        break;
    }
  };

  return (
    <Card className={`shadow-outline`}>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
        className={`${style.form} flex-column`}>
        <label htmlFor="interest-type">Interest Type</label>
        <select
          id="interest-type"
          className="shadow-outline"
          onChange={(e) => {
            changeType(e);
          }}>
          <option value="0">Simple Interest</option>
          <option value="1">Simple Discount</option>
          <option value="2">Compound Interest</option>
          <option value="3">Annuity</option>
        </select>
        <ul className={style["values-ul"]}>
          <li className={`${style["value"]} flex-column`}>
            <label htmlFor="current-amount">Current Amount</label>
            <input
              type="number"
              min="0"
              id="current-amount"
              placeholder="Current ($)"
              className="shadow-outline"
              required
            />
          </li>
          <li className={`${style["value"]} flex-column`}>
            <label htmlFor="max-year">Year</label>
            <input
              type="number"
              step="1"
              min="0"
              max="125"
              id="max-year"
              placeholder="Amount of years to list"
              className="shadow-outline"
              required
            />
          </li>
          <li className={`${style["value"]} flex-column`}>
            <label htmlFor="rate">rate / discount (%)</label>
            {/* create condition where if discount its says "discount" */}
            <input
              type="number"
              min="0"
              id="rate"
              placeholder="The amount of rate"
              className="shadow-outline"
              required
            />
          </li>
          <li
            className={`${style["value"]} flex-column`}
            style={{display: interestMode < 2 ? "none" : "flex"}}>
            <label htmlFor="compound-per-year">Compounds per year ($)</label>
            <input
              type="number"
              min="0"
              id="compound-per-year"
              placeholder="N amount of compounds"
              className="shadow-outline"
            />
          </li>
        </ul>
        <button type="submit" className="shadow-outline">
          Calculate
        </button>
      </form>
    </Card>
  );
};

export default InterestForm;
