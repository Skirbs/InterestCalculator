const ResultsListData = (props) => {
  return (
    <tr>
      <td>{props.interestData.data[props.dataIndex].year}</td>
      <td>{props.interestData.data[props.dataIndex].interestAdded}</td>
      <td>{props.interestData.data[props.dataIndex].futureValue}</td>
    </tr>
  );
};

export default ResultsListData;
