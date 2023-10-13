import style from "./ResultsList.module.css";
import Card from "../Card/Card";
import ResultsListHeader from "./ResultsListHeader";
import ResultsListData from "./ResultsListData";

const ResultsList = () => {
  return (
    <Card className={`flex-column shadow-outline`}>
      <table className={style.table}>
        <ResultsListHeader />
        <ResultsListData />
      </table>
    </Card>
  );
};

export default ResultsList;
