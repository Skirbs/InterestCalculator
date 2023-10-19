import style from "./InterestForm.module.css";
import Card from "../Card/Card";
import {useState} from "react";

let dataList = [];

const InterestForm = (props) => {
  const [interestMode, setInterestMode] = useState(0);
  const [answerType, setAnswerType] = useState(0);

  const changeInterestType = (e) => {
    setInterestMode(parseFloat(e.target.value));
    /* set "required" to compound per year*/
  };

  const changeAnswerType = (e) => {
    setAnswerType(parseFloat(e.target.value));
    /* set "required" to compound per year*/
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dataList = [];

    const currentAmountValue = parseFloat(document.querySelector("#current-amount").value);
    const maxYearValue = parseFloat(document.querySelector("#max-year").value);
    const rateValue = parseFloat(document.querySelector("#rate").value);
    const compoundPerYearValue = parseFloat(document.querySelector("#compound-per-year").value);

    let lastFutureValue = currentAmountValue;

    if (answerType == 0) {
      for (let i = 1; i <= maxYearValue; i++) {
        [lastFutureValue] = createData(
          interestMode,
          currentAmountValue,
          lastFutureValue,
          rateValue,
          i,
          compoundPerYearValue
        );
      }
    } else {
      [lastFutureValue] = createData(
        interestMode,
        currentAmountValue,
        lastFutureValue,
        rateValue,
        maxYearValue,
        compoundPerYearValue
      );
    }

    props.onSubmitHandler({type: interestMode, data: dataList});
  };

  const createData = (
    type,
    currentAmountValue,
    lastFutureValue,
    rateValue,
    year,
    compoundPerYearValue
  ) => {
    let futureValue;
    switch (type) {
      case 0:
        futureValue = Math.round(currentAmountValue * (1 + (rateValue / 100) * year) * 100) / 100;
        break;

      case 1:
        futureValue = Math.round(currentAmountValue * (1 - (rateValue / 100) * year) * 100) / 100;
        break;

      case 2:
        futureValue =
          Math.round(
            currentAmountValue *
              Math.pow(1 + rateValue / 100 / compoundPerYearValue, compoundPerYearValue * year) *
              100
          ) / 100;
        break;

      case 3:
        futureValue =
          Math.round(
            currentAmountValue *
              ((Math.pow(1 + rateValue / 100 / compoundPerYearValue, compoundPerYearValue * year) -
                1) /
                (rateValue / 100 / compoundPerYearValue)) *
              100
          ) / 100;
        break;

      case 4:
        futureValue =
          Math.round(
            currentAmountValue *
              ((Math.pow(1 + rateValue / 100 / compoundPerYearValue, compoundPerYearValue * year) -
                1) /
                (rateValue / 100 / compoundPerYearValue)) *
              (1 + rateValue / 100) *
              100
          ) / 100;
        break;
    }

    const interestAdded = Math.round((futureValue - lastFutureValue) * 100) / 100;
    lastFutureValue = futureValue;

    const newData = new InterestDataClass(year, interestAdded, futureValue);
    dataList.push(newData);

    return [lastFutureValue];
  };

  return (
    <Card className={`shadow-outline`}>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
        className={`${style.form} flex-column`}>
        <div className={`${style["top-selections"]}`}>
          <div>
            <label htmlFor="interest-type">Interest Type</label>
            <select
              id="interest-type"
              className="shadow-outline"
              onChange={(e) => {
                changeInterestType(e);
              }}>
              <option value="0">Simple Interest</option>
              <option value="1">Simple Discount</option>
              <option value="2">Compound Interest</option>
              <option value="3">Ordinary Annuity</option>
              <option value="4">Annuity Due</option>
            </select>
          </div>

          <div>
            <label htmlFor="answer-type">Answer Type</label>
            <select
              id="answer-type"
              className="shadow-outline"
              onChange={(e) => {
                changeAnswerType(e);
              }}>
              <option value="0">Show All Years</option>
              <option value="1">Show Given Year</option>
            </select>
          </div>
        </div>

        <ul className={style["values-ul"]}>
          <li className={`${style["value"]} flex-column`}>
            <label htmlFor="current-amount">Current Amount</label>
            <input
              type="number"
              min="0"
              id="current-amount"
              placeholder="Current Value"
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
              step={0.0001}
              required
            />
          </li>
          <li
            className={`${style["value"]} flex-column`}
            style={{display: interestMode < 2 ? "none" : "flex"}}>
            <label htmlFor="compound-per-year">Compounds per year </label>
            <input
              type="number"
              min="0"
              id="compound-per-year"
              placeholder="N amount of compounds"
              defaultValue={1}
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

function InterestDataClass(year, interestAdded, futureValue, currentCompound, maxCompound) {
  this.year = year;

  if (currentCompound > 0) {
    this.currentCompound = currentCompound;
    this.maxCompound = maxCompound;
  }

  this.interestAdded = interestAdded;
  this.futureValue = futureValue;
}

export default InterestForm;
