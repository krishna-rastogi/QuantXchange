export default function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row mt-5 p-5">
        <div className="col-8 p-2">
          <a href="/" style={{textDecoration: "none"}} className="fs-5">Brokerage Calculator</a>
          <ul className="text-muted mt-4">
            <li className="mt-2">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li className="mt-2">Digital contract notes will be sent via e-mail.</li>
            <li className="mt-2">Physical copies of contract notes, if required, shall be charged ₹20 per contarct note.</li>
            <li className="mt-2">For NRI account (non-PIS), 0.5% of ₹100 per executed order for equity.</li>
            <li className="mt-2">For NRI account (PIS), 0.5% of ₹200 per executed order for equity.</li>
            <li className="mt-2">If the account is in debit balance, any order placed will be charged ₹40 per executed order insted of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className="col-4">
          <a href="/" style={{textDecoration: "none"}} className="fs-5">List of Charges</a>
        </div>
      </div>
    </div>
  );
}
