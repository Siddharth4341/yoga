import React from "react"
import { useState } from "react"

export default function FAQ(props) {
    const [flag, setFlag] = useState(false);
    return(
        <div className="p-2">
            <div className="text-light p-2 rounded m-1 d-flex justify-content-between" style={{backgroundColor: "#B9D4AA"}}>
                <h3>{props.title}</h3>
                <button className="btn text-light" onClick={()=>{setFlag(!flag)}}>{flag? "-" : "+"}</button>
            </div>
            {
                flag? <p className="bg-light mb-2 rounded p-3">{props.desc}</p> : null
            }
        </div>
    )
}