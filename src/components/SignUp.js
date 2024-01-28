import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Signup.css"
export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const handlesubmit = (e) => {
        alert("No database Connected");
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="login-page">
            <div className="form">
                <div className="login">
                    <div className="login-header">
                        <h3>Register</h3>
                        <p>Please enter your credentials to register.</p>
                    </div>
                </div>
                <form className="login-form">
                    <input type="text" required onChange={onChange} value={credentials.name} name="name" id="name" placeholder="UserName" />
                    <input type="email" value={credentials.email} id="email" name="email" onChange={onChange} placeholder="Email" />
                    <input type="password" value={credentials.password} name="password" required id="password" onChange={onChange} placeholder="Password" />
                    <input type="password" onChange={onChange} value={credentials.cpassword} name="cpassword" id="cpassword" placeholder="Confirm Password" />
                    <button type="submit" onClick={handlesubmit} className={`btn bt-lg bg-dark text-light rounded-pill my-2 ${credentials.cpassword === credentials.password ? "" : "disabled"}`}>Sign Up</button>
                    <p className="message">Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
}
