const ResultsListHeader = (props) => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>{props.interestData.type === 1 ? "Reduced Discount" : "Added Interest"}</th>
        <th>Total Savings</th>
      </tr>
    </thead>
  );
};

export default ResultsListHeader;
