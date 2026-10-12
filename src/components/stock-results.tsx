const results = [
  { ticker: "GOOGL", model: "Baseline", rmse: "47.0911", mae: "35.7711", mape: "2.8087%" },
  { ticker: "GOOGL", model: "Modified", rmse: "30.3990", mae: "22.1506", mape: "1.7834%" },
  { ticker: "INTC", model: "Baseline", rmse: "1.4630", mae: "0.9251", mape: "1.7539%" },
  { ticker: "INTC", model: "Modified", rmse: "1.5088", mae: "0.9834", mape: "1.8620%" },
];

export function StockResults() {
  return (
    <div className="mt-7">
      <h3 className="font-mono text-[11px] uppercase text-mute">Test-set evaluation</h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">One-step predictions · April 2019–April 2020 holdout. RMSE and MAE are in USD; lower is better.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[430px] border-y border-line text-left font-mono text-[11px]">
          <caption className="sr-only">Baseline and modified LSTM test results for Alphabet and Intel</caption>
          <thead className="text-mute">
            <tr>{["Ticker", "Model", "RMSE", "MAE", "MAPE"].map(label => <th key={label} scope="col" className="px-2 py-3 font-normal">{label}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-line">
            {results.map(row => (
              <tr key={`${row.ticker}-${row.model}`}>
                <th scope="row" className="px-2 py-3 font-medium">{row.ticker}</th>
                <td className="px-2 py-3">{row.model}</td>
                <td className="px-2 py-3">{row.rmse}</td>
                <td className="px-2 py-3">{row.mae}</td>
                <td className="px-2 py-3">{row.mape}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-mute">The modified model improved GOOGL, but the baseline remained better on INTC across all three metrics. These historical experiments are not investment advice.</p>
    </div>
  );
}