import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

export default function TipCalculator() {
  return (
    <div className="TipCalculator">
      <BillAmountField />
      <TipPercentSection />
      <NumOfPeopleField error={true} />
      <TotalDisplay />
    </div>
  );
}

function BillAmountField() {
  return (
    <div className="InputGroup">
      <p>Bill</p>
      <div className="input-container">
        <img className="input-icon" src={dollarIcon} alt="" />
        <input type="number" min={0} step={0.01} value={142.55} />
      </div>
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
        <button className="btn-highlighted">15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="number" placeholder="Custom" />
      </div>
    </div>
  );
}

function NumOfPeopleField({error}) {
  return (
    <div className="InputGroup">
      <div className="flex-row">
        <p>Number of People</p>
        { error && <p className="error-text">Can't be zero</p> }
      </div>
      <div className="input-container">
        <img className="input-icon" src={personIcon} alt="" />
        <input className={error && "error"} type="number" value={5} />
      </div>
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