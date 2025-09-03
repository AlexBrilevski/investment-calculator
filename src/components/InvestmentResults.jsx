import {formatter} from '../util/investment';

export default function InvestmentResults({ results }) {
  console.log(results);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Annual Investment</th>
          <th>Interest</th>
          <th>Value End Of Year</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) =>
          <tr key={`${index}-${result.year}`} className="center">
            <td>{result.year}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
