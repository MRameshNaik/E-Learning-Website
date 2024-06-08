import React from "react";

const LoginSignUp=()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"></input>
                    <input type="email" placeholder="Email Address"></input>
                    <input type="password" placeholder="Password"></input>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login"> Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing , I agree to the all terms & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;

// stopped at 1:42:11 dur to react-dom issue
