const ResultsListData = (props) => {
  return (
    <tr>
      <td>{props.interestData.data[props.dataIndex].year}</td>
      <td>
        {props.interestData.data[props.dataIndex].interestAdded
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </td>
      <td>
        {props.interestData.data[props.dataIndex].futureValue
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </td>
    </tr>
  );
};

export default ResultsListData;
