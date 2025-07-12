
export default function Stats(){
    return(
        <div className="container p-5 mt-2">
            <div className="row">
                <div className="col-5 p-5">
                    <h1 className="mb-5">Trust with confidence</h1>
                    <div className="mt-5">
                        <h2 className="fs-4">Customer-first always</h2>
                        <p className="text-muted">That's why 1.6+ crore customers trust QuantXchange with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="fs-4">No spam or gimmicks</h2>
                        <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="fs-4">The QuantXchange universe</h2>
                        <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="fs-4">Do better with money</h2>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-7">
                    <img src="media/Images/ecosystem.png" alt="" style={{width: "95%", margin: "2rem"}}/>
                    <div className="text-center">
                        <a href="" className="mx-5" style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a> 
                        <a href="" style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}