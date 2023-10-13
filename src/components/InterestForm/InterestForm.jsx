import style from "./InterestForm.module.css";

const InterestForm = () => {
  return (
    <form className={`${style.form} shadow-outline flex-column`}>
      <label htmlFor="interest-type">Interest Type</label>
      <select id="interest-type" className="shadow-outline">
        <option value="0">Simple Interest</option>
        <option value="1">Simple Discount</option>
        <option value="2">Compound Interest</option>
        <option value="3">Annuity</option>
      </select>

      <ul className={style["values-ul"]}>
        <li className={`${style["value"]} flex-column`}>
          <label htmlFor="current-amount">Current Amount</label>
          <input type="number" min="0" id="current-amount" className="shadow-outline" />
        </li>
        <li className={`${style["value"]} flex-column`}>
          <label htmlFor="max-year">Year</label>
          <input
            type="number"
            step="1"
            min="0"
            max="125"
            id="max-year"
            className="shadow-outline"
          />
        </li>
        <li className={`${style["value"]} flex-column`}>
          <label htmlFor="rate">rate / discount (%)</label>
          {/* create condition where if discount its says "discount" */}
          <input type="number" min="0" id="rate" className="shadow-outline" />
        </li>
        <li className={`${style["value"]} flex-column `}>
          <label htmlFor="compound-per-year">Compounds per year ($)</label>
          <input type="number" min="0" id="compound-per-year" className="shadow-outline" />
        </li>
      </ul>

      <button type="submit" className="shadow-outline">
        Calculate
      </button>
    </form>
  );
};

export default InterestForm;
