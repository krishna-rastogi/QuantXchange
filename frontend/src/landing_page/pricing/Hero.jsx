
export default function Hero(){
    return(
        <div className="container text-center mt-5">
            <div className="row mb-5 p-5 border-bottom">
                <h1>Pricing</h1>
                <p className="fs-5 text-muted mt-2">Free equity investments and flat ₹20 traday and F&O trades</p>
            </div>
            <div className="row p-5 mb-5">
                <div className="col p-3">
                    <img src="media/Images/pricingEquity.svg" style={{width: "70%"}} alt="" />
                    <h2>Free equity delivery</h2>
                    <p className="mt-4 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-3">
                    <img src="media/Images/intradayTrades.svg" style={{width: "70%"}} alt="" />
                    <h2>Intraday and F&O trades</h2>
                    <p className="mt-4 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-3">
                    <img src="media/Images/pricingEquity.svg" style={{width: "70%"}} alt="" />
                    <h2>Free direct MF</h2>
                    <p className="mt-4 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>               
            </div>
        </div>
    );
}