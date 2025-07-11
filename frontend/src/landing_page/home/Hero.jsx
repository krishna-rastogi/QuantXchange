import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container p-5 text-center">
        <div className="row">
          <img
            src="media/Images/homeHero.png"
            alt="Hero Image"
            className="mb-5"
          />
          <h1>Invest in everything</h1>
          <p className="fs-5" style={{ fontWeight: "400" }}>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="btn btn-primary p-2 fs-5 mt-4"
            style={{ width: "200px", margin: "auto", fontWeight: "500" }}
            onClick={() => navigate("/signup")}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}
