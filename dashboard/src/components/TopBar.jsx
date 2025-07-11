import Menu from "./Menu";

export default function TopBar(){
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{25178.23} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{82575.62}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};
