import "./Footer.css"

export default function Footer() {
  return (
    <footer
      className="mt-5 border-top"
      style={{
        backgroundColor: "#FBFBFB",
        paddingLeft: "10rem",
        paddingRight: "10rem",
      }}
    >
      <div className="container">
        <div className="row mb-5 mt-5">
          <div className="col">
            <img
              src="media/Images/QuantXchange_Logo.png"
              style={{ width: "50%" }}
              alt=""
            />
            <p className="text-muted mt-4" style={{ fontSize: ".85rem" }}>
              &copy; 2010 - 2025, QuantXchange Broking Ltd. <br /> All rights
              reserved.
            </p>
          </div>
          <div className="col">
            <p className="footerEle">Account</p>
            <a href="" className="footerLinks">Open demat account</a>
            <br />
            <a href="" className="footerLinks">Minor demat account</a>
            <br />
            <a href="" className="footerLinks">NRI demat account</a>
            <br />
            <a href="" className="footerLinks">Commodity</a>
            <br />
            <a href="" className="footerLinks">Dematerialisation</a>
            <br />
            <a href="" className="footerLinks">Fund transfer</a>
            <br />
            <a href="" className="footerLinks">MTF</a>
            <br />
            <a href="" className="footerLinks">Referral program</a>
            <br />
          </div>
          <div className="col">
            <p className="footerEle">Support</p>
            <a href="" className="footerLinks">Contact us</a>
            <br />
            <a href="" className="footerLinks">Support portal</a>
            <br />
            <a href="" className="footerLinks">How to file a complaint?</a>
            <br />
            <a href="" className="footerLinks">Status of your complaints</a>
            <br />
            <a href="" className="footerLinks">Bulletin</a>
            <br />
            <a href="" className="footerLinks">Circular</a>
            <br />
            <a href="" className="footerLinks">Z-Connect blog</a>
            <br />
            <a href="" className="footerLinks">Downloads</a>
            <br />
          </div>
          <div className="col">
            <p className="footerEle">Company</p>
            <a href="" className="footerLinks">About</a>
            <br />
            <a href="" className="footerLinks">Philosophy</a>
            <br />
            <a href="" className="footerLinks">Press & media</a>
            <br />
            <a href="" className="footerLinks">Careers</a>
            <br />
            <a href="" className="footerLinks">QuantXchange Cares (CSR)</a>
            <br />
            <a href="" className="footerLinks">QuantXchange.tech</a>
            <br />
            <a href="" className="footerLinks">Open source</a>
            <br />
          </div>
          <div className="col">
            <p className="footerEle">Quick Links</p>
            <a href="" className="footerLinks">Upcoming IPOs</a>
            <br />
            <a href="" className="footerLinks">Brokerage charges</a>
            <br />
            <a href="" className="footerLinks">Market holidays</a>
            <br />
            <a href="" className="footerLinks">Economic calendar</a>
            <br />
            <a href="" className="footerLinks">Calculators</a>
            <br />
            <a href="" className="footerLinks">Markets</a>
            <br />
            <a href="" className="footerLinks">Sectors</a>
            <br />
          </div>
        </div>
        <div className="text-muted" style={{ fontSize: "12px" }}>
          <p>
            QuantXchange Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through QuantXchange
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through QuantXchange Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            - SEBI Registration no.: INZ000038238 Registered Address: QuantXchange
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@QuantXchange.com, for DP related to dp@QuantXchange.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1. Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2. Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3. Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            broker, DP, Mutual Fund etc., you need not undergo the same process
            again when you approach another intermediary." Dear Investor, if you
            are subscribing to an IPO, there is no need to issue a cheque.
            Please write the Bank account number and sign the IPO application
            form to authorize your bank to make payment in case of allotment. In
            case of non allotment the funds will remain in your bank account. As
            a business we don't give stock tips, and have not authorized anyone
            to trade on behalf of others. If you find anyone claiming to be part
            of QuantXchange and offering such services, please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}
