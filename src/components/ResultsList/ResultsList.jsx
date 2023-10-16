import style from "./ResultsList.module.css";
import Card from "../Card/Card";
import ResultsListHeader from "./ResultsListHeader";
import ResultsListData from "./ResultsListData";

const ResultsList = (props) => {
  const createTable = () => {
    return (
      <table className={style.table}>
        <ResultsListHeader interestData={props.interestData} />
        <tbody>
          {props.interestData.data.map((rowData, index) => {
            return (
              <ResultsListData interestData={props.interestData} dataIndex={index} key={index} />
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <Card className={`flex-column shadow-outline`}>
      {props.interestData.data.length === 0 ? null : createTable()}
    </Card>
  );
};

export default ResultsList;
