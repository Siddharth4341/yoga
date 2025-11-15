import React from "react"
import { useParams, Link } from "react-router-dom"
import data from "../assets/CouncellingData.json"

export default function CouncelDetails(props) {
    let params = useParams();
    const [cd, setCd] = React.useState({});
    React.useEffect(() => {
        let result = data.filter(i => i.id == params.id);
        setCd(result[0]);
    }, [params])
    return(
        <div id="cdt">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={cd.primaryImg} className="rounded w-100"/>
                    </div>
                    <div className="col-sm-8">
                        <h5>{cd.title}</h5>
                        <p>{cd.bodyText}</p>
                        <Link className="btn btn-outline-success" to={`/councelbook/${cd.id}`}>Book Now</Link>
                    </div>
                </div>
            </div>
            <div className="container mt-3"> 
                <div className="row">
                    {
                        cd.secondaryImgs? 
                        cd.secondaryImgs.map((i) => (
                            <div className="col-sm-4">
                                <img src={i}/>
                            </div>
                        ))
                        : null
                    }
                </div>
            </div>
        </div>
    )
}