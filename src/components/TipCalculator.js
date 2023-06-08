import { useState } from "react";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

export default function TipCalculator() {
  const [numPeople, setNumPeople] = useState(null);
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercent, setTipPercent] = useState({ percent: 0, custom: false });
  
  let tipAmount = "$0.00";
  let total = "$0.00";
  if (numPeople > 0 && billAmount >= 0) {
    let totalTipPerPerson = billAmount * (tipPercent.percent / 100) / numPeople;
    let totalPerPerson = billAmount / numPeople + totalTipPerPerson;
    tipAmount = "$" + totalTipPerPerson.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2});
    total = "$" + totalPerPerson.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  const onResetClicked = () => {
    setNumPeople(null);
    setBillAmount(null);
    setTipPercent({percent: 0, custom: false});
  };
  const resetDisabled = numPeople === null && billAmount === null &&
    tipPercent.percent === 0 && tipPercent.custom === false;
  
  return (
    <div className="TipCalculator">
      <BillAmountField billAmount={billAmount} setBillAmount={setBillAmount} />
      <TipPercentSection tipPercent={tipPercent} setTipPercent={setTipPercent} />
      <NumOfPeopleField numPeople={numPeople} setNumPeople={setNumPeople} error={numPeople === 0} />
      <TotalDisplay tipAmount={tipAmount} total={total} onResetClicked={onResetClicked} resetDisabled={resetDisabled} />
    </div>
  );
}

function BillAmountField({billAmount, setBillAmount}) {
  return (
    <div className="InputGroup">
      <p>Bill</p>
      <div className="input-container">
        <img className="input-icon" src={dollarIcon} alt="" />
        <input type="number" min={0} step={0.01}
          value={billAmount ?? ""}
          placeholder="0"
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>
    </div>
  );
}

function TipPercentSection({tipPercent, setTipPercent}) {
  return (
    <div className="InputGroup">
      <p>Select Tip %</p>
      <div className="TipPercentSection__choices">
        {
          [5,10,15,25,50].map((num, index) => {
            return (
              <button key={index}
                className={(!tipPercent.custom && tipPercent.percent === num) ? "btn-highlighted" : undefined}
                onClick={() => setTipPercent({percent: num, custom: false})}
              >
                {num}%
              </button>
            );
          })
        }
        <input type="number" placeholder="Custom"
          value={tipPercent.custom ? tipPercent.percent : ""}
          min={0} max={100}
          onChange={(e) => setTipPercent({percent: Number(e.target.value), custom: true})}
        />
      </div>
    </div>
  );
}

function NumOfPeopleField({numPeople, setNumPeople, error}) {
  return (
    <div className="InputGroup">
      <div className="flex-row">
        <p>Number of People</p>
        { error && <p className="error-text">Can't be zero</p> }
      </div>
      <div className="input-container">
        <img className="input-icon" src={personIcon} alt="" />
        <input className={error ? "error" : undefined} type="number" min={0}
          placeholder="0"
          value={numPeople ?? ""} onChange={(e) => setNumPeople(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

function TotalDisplay({tipAmount, total, onResetClicked, resetDisabled}) {
  return (
    <div className="TotalDisplay">
      <div className="TotalDisplay__group">
        <div>
          <p className="TotalDisplay__title">Tip Amount</p>
          <p className="TotalDisplay__per-person">/ person</p>
        </div>
        <p className="TotalDisplay__amount">{tipAmount}</p>
      </div>

      <div className="TotalDisplay__group">
        <div>
          <p className="TotalDisplay__title">Total</p>
          <p className="TotalDisplay__per-person">/ person</p>
        </div>
        <p className="TotalDisplay__amount">{total}</p>
      </div>

      <button className={"TotalDisplay__reset-btn " + (true && "btn-highlighted")} onClick={onResetClicked}
        disabled={resetDisabled}
        >
          Reset
      </button>
    </div>
  );
}