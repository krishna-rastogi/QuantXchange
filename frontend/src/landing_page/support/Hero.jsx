import "./Hero.css";
export default function Hero() {
  return (
    <>
      <section className="container-fluid supportHero">
        <div className="supportWrapper">
          <h4>Support Portal</h4>
          <a href="" style={{color: "#fff", fontSize: "18px"}}>
            Track Tickets
          </a>
        </div>
        <div className="row">
          <div className="col-7 leftSec">
            <h4>
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              type="text" className="search"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            />
            
            <a href="" className="links">Track account opening</a>
            
            <a href="" className="links">Track segment activation</a>
            
            <a href="" className="links">Intraday margins</a>
            
            <a href="" className="links">Kite user manual</a>
           
          </div>
          <div className="col-5">
            <h4>Featued</h4>
            1. <a href="" className="links"> Surveillance measure on scrips - June 2025</a>
            <br />
            2. <a href="" className="links"> Rights Entitlements listing in June 2025</a>
          </div>
        </div>
      </section>
    </>
  );
}
