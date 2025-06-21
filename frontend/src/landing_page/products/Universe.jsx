export default function Universe() {
  return (
    <div className="container text-center mt-5 p-5">
      <div className="row">
        <h1>The QuantXchange Universe</h1>
        <p className="mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-muted">
        <div className="col p-5">
          <div>
            <img
              src="media/Images/zerodhaFundhouse.png"
              alt=""
              style={{ width: "50%" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="mt-5">
            <img
              src="media/Images/streakLogo.png"
              alt=""
              style={{ width: "50%" }}
            />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col p-5">
          <div>
            <img
              src="media/Images/sensibullLogo.svg"
              alt=""
              style={{ width: "50%" }}
            />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="mt-5">
            <img
              src="media/Images/smallcaseLogo.png"
              alt=""
              style={{ width: "50%" }}
            />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs
            </p>
          </div>
        </div>
        <div className="col p-5">
          <div>
            <img
              src="media/Images/tijori.svg"
              alt=""
              style={{ width: "50%" }}
            />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="mt-5">
            <img
              src="media/Images/dittoLogo.png"
              alt=""
              style={{ width: "50%" }}
            />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
