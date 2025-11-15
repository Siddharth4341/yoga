import React from "react"

export default function Register() {
    return(
        <div id="register">
            <div className="container w-25 bg-dark bg-opacity-75 text-center text-light p-3 rounded">
                <h5>Sign Up</h5>
                <form>
                    <input type="text" placeholder="Enter your first name" class="form-control my-3 px-2 py-2 bg-dark"/>
                    <input type="text" placeholder="Enter your last name" class="form-control my-3 px-2 py-2 bg-dark"/>
                    <input type="email" placeholder="Enter your email" class="form-control my-3 px-2 py-2 bg-dark"/>
                    <input type="password" placeholder="Enter your password" class="form-control my-3 px-2 py-2 bg-dark"/>
                    <button className="btn btn-success my-3 text-center w-100">Sign Up</button>
                    <br/>
                    <button className="btn btn-success my-3 text-center w-100">Sign In</button>
                </form>
            </div>
        </div>
    )
}