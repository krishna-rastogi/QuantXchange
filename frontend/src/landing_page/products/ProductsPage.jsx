import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";

export default function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgURL="media/Images/kite.png"
        prodName="Kite"
        prodDescrip="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightSection
        imgURL="media/Images/console.png"
        prodName="Console"
        prodDescrip="The central dashboard for your QuantXchange account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/"
      />
      <LeftSection
        imgURL="media/Images/coin.png"
        prodName="Coin"
        prodDescrip="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin&hl=en_IN"
        appStore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"
      />
      <RightSection
        imgURL="media/Images/kiteconnect.svg"
        prodName="Kite Connect API"
        prodDescrip="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/"
      />
      <LeftSection
        imgURL="media/Images/varsity.png"
        prodName="Varsity mobile"
        prodDescrip="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity&hl=en_IN"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <h4 className="text-center mt-5">
        Want to know more about our technology stack? Check out the
        QuantXchange.tech blog.
      </h4>
      <Universe />
      <div className="text-center">
        <button
          className="btn btn-primary p-2 fs-5"
          style={{ width: "200px", margin: "auto", fontWeight: "500" }}
        >
          Sign up for free
        </button>
      </div>
    </>
  );
}
