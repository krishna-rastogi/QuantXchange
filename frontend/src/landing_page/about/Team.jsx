export default function Team() {
  return (
    <div className="container border-top mb-5">
      <div className="row text-center mt-5">
        <h1>People</h1>
      </div>
      <div className="row mt-5">
        <div className="col text-center mb-5" style={{ paddingLeft: "9rem" }}>
          <img
            src="media/Images/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "55%" }}
            alt="Founder"
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col" style={{ padding: "3rem 8rem 0 0" }}>
          <p>
            Krishna bootstrapped and founded QuantXchange in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            QuantXchange has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{textDecoration: "none", fontWeight: "500"}}>Homepage</a> / <a href="" style={{textDecoration: "none", fontWeight: "500"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration: "none", fontWeight: "500"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
