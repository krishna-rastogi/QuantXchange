
export default function Education(){
    return(
        <div className="container">
            <div className="row p-5">            
                <div className="col">
                    <img src="media/Images/education.svg" style={{width: "75%"}} alt="" />
                </div>
                <div className="col p-3">
                    <h1 className="mb-4 mt-2 fs-2">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    
                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration: "none"}}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}