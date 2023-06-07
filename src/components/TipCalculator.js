export default function TipCalculator() {
  return (
    <div className="TipCalculator">
      <BillAmountField />
      <TipPercentSection />
      <NumOfPeopleField />
      <TotalDisplay />
    </div>
  );
}

function BillAmountField() {
  return (
    <div className="InputGroup">
      <p>Bill</p>
      <input type="number" value={142.55} />
    </div>
  );
}

function TipPercentSection() {
  return (
    <div className="InputGroup">
      <p>Select Tip %</p>
      <div className="TipPercentSection__choices">
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="number" placeholder="Custom" />
      </div>
    </div>
  );
}

function NumOfPeopleField() {
  return (
    <div className="InputGroup">
      <p>Number of People</p>
      <input type="number" value={5} />
    </div>
  );
}

function TotalDisplay() {
  return (
    <div className="TotalDisplay">
      <div className="TotalDisplay__group">
        <div>
          <p className="TotalDisplay__title">Tip Amount</p>
          <p className="TotalDisplay__per-person">/ person</p>
        </div>
        <p className="TotalDisplay__amount">{"$4.27"}</p>
      </div>

      <div className="TotalDisplay__group">
        <div>
          <p className="TotalDisplay__title">Total</p>
          <p className="TotalDisplay__per-person">/ person</p>
        </div>
        <p className="TotalDisplay__amount">{"$32.79"}</p>
      </div>

      <button className={"TotalDisplay__reset-btn " + (true && "btn-highlighted")}>Reset</button>
    </div>
  );
}