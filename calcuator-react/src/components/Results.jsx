import { calculateInvestmentResults, formatter } from "../utils/investment.js";

export default function Results({ userInputValue }) {
  console.log("results input:", { userInputValue });
  const resultData = calculateInvestmentResults(userInputValue);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>YEAR</th>
          <th>INVESTMENT VALUE</th>
          <th>TOTAL (YEAR) </th>
          <th>TOTAL INTEREST</th>
          <th>INVESTED CAPITAL</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
