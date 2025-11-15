import React from "react"
import {Link} from "react-router-dom"

export default function Councel() {
    return(
        <div class="container" id="councel">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.zRjoehRjGfLTEp8VQ__fFAHaEJ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" class="card-img-top"/>
                    <div class="card-body p-3">
                        <h5 class="card-title text-center">Individual Yoga Councelling</h5>
                        <div class="d-flex align-items-center justify-content-between p-2">
                            <b class="text-start">$50</b>
                            <Link class="btn btn-outline-success text-end" to="/counceldetails/1">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.zRjoehRjGfLTEp8VQ__fFAHaEJ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" class="card-img-top"/>
                    <div class="card-body p-3">
                        <h5 class="card-title text-center">Group Yoga Therapy</h5>
                        <div class="d-flex align-items-center justify-content-between p-2">
                            <b class="text-start">$30</b>
                            <Link class="btn btn-outline-success text-end" to="/counceldetails/2">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.zRjoehRjGfLTEp8VQ__fFAHaEJ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" class="card-img-top"/>
                    <div class="card-body p-3">
                        <h5 class="card-title text-center">Online Yoga Consultation</h5>
                        <div class="d-flex align-items-center justify-content-between p-2">
                            <b class="text-start">$40</b>
                            <Link class="btn btn-outline-success text-end" to="/counceldetails/3">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}