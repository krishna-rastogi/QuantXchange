
export default function RightSection({imgURL, prodName, prodDescrip, learnMore}){
    return(
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-5" style={{padding: "2rem 7rem 0 5rem"}}>
                    <h1 className="mt-5">{prodName}</h1>
                    <p className="mt-4 mb-3">{prodDescrip}</p>
                    <a href={learnMore} style={{textDecoration: "none"}}>Learn more →</a>
                </div>
                <div className="col-6">
                    <img src={imgURL} alt="" style={{width: "100%"}}/>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}