import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Signup.css"

export default function LogIn(props) {
    const [credentials, setcredentials] = useState({ email: "", password: "" });
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
                        <h3>LOGIN</h3>
                        <p>Please enter your credentials to login.</p>
                    </div>
                </div>
                <form className="login-form">
                    <input type="email" value={credentials.email} id="email" name="email" onChange={onChange} placeholder="Email" required />
                    <input type="password" value={credentials.password} name="password" required id="password" onChange={onChange} placeholder="Password" />
                    <button type="submit" onClick={handlesubmit} className="btn bt-lg bg-dark text-light rounded-pill my-2">Sign In</button>
                    <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                </form>
            </div>
        </div>
    );
}
