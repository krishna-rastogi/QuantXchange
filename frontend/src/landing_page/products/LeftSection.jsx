
export default function LeftSection({imgURL, prodName, prodDescrip, tryDemo, learnMore, googlePlay, appStore}){
    return(
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-1"></div>
                <div className="col-6">
                    <img src={imgURL} alt="" />
                </div>
                <div className="col-5 mt-5"  style={{padding: "0 5rem 0 5rem"}}>
                    <h1>{prodName}</h1>
                    <p className="mt-4 mb-3">{prodDescrip}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try demo →</a>
                        <a href={learnMore} style={{marginLeft: "4rem", textDecoration: "none"}}>Learn More →</a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}><img src="media/Images/googlePlayBadge.svg" alt="" /></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={appStore}><img src="media/Images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}