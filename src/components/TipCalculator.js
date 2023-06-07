export default function TipCalculator() {
  return (
    <div>
      <BillAmountField />
      <TipPercentSection />
      <NumOfPeopleField />
      <TotalDisplay />
    </div>
  );
}

function BillAmountField() {
  return (
    <div>
      <p>Bill</p>
      <input type="number" />
    </div>
  );
}

function TipPercentSection() {
  return (
    <div>
      <p>Select Tip %</p>
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
      <button>Custom</button>
    </div>
  );
}

function NumOfPeopleField() {
  return (
    <div>
      <p>Number of People</p>
      <input type="number" />
    </div>
  );
}

function TotalDisplay() {
  return (
    <div>
      <div>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p>$4.27</p>
      </div>

      <div>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p>$32.79</p>
      </div>

      <button>Reset</button>
    </div>
  );
}