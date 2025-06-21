
export default function Awards(){
    return(
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-6">
                    <img src="media/Images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million QuantXchange clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">Futures and Options</li>
                                <li className="mb-2">Commodity derivatives</li>
                                <li className="mb-2">Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">Stocks & IPOs</li>
                                <li className="mb-2">Direct mutual funds</li>
                                <li className="mb-2">Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/Images/pressLogos.png" alt="" className="mt-5" style={{width: "95%"}}/>
                </div>
            </div>
        </div>
    );
}