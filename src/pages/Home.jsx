import React from "react"

export default function Home() {
    return(
        <div id="home">
            <header>
                <div className="bg-dark bg-opacity-75 text-light p-3">
                    <h1>Welocome to Our Yoga Studio</h1>
                    <p>Figure out the yoga style perfectly tailored to your needs</p>
                </div>
            </header>
            <div class="container">
                <h1 className="text-center text-secondary">Popular Yoga Styles</h1>
                <div className="row">
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img" src="https://tse2.mm.bing.net/th/id/OIP.FLuzkDXO2otN-1mk_9DsnAHaFN?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                            <div class="card-body p-3">
                                <h4>Some type of yoga</h4>
                                <p>The description for this kind of yoga</p>
                                <button class="btn btn-outline-secondary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img" src="https://tse2.mm.bing.net/th/id/OIP.FLuzkDXO2otN-1mk_9DsnAHaFN?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                            <div class="card-body p-3">
                                <h4>Some type of yoga</h4>
                                <p>The description for this kind of yoga</p>
                                <button class="btn btn-outline-secondary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img" src="https://tse2.mm.bing.net/th/id/OIP.FLuzkDXO2otN-1mk_9DsnAHaFN?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                            <div class="card-body p-3">
                                <h4>Some type of yoga</h4>
                                <p>The description for this kind of yoga</p>
                                <button class="btn btn-outline-secondary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img" src="https://tse2.mm.bing.net/th/id/OIP.FLuzkDXO2otN-1mk_9DsnAHaFN?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                            <div class="card-body p-3">
                                <h4>Some type of yoga</h4>
                                <p>The description for this kind of yoga</p>
                                <button class="btn btn-outline-secondary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}