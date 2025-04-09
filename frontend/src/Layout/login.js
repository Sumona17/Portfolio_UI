import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Section } from '../styles/pages/login';

const Login = () => {
    return (
        <Section>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-left">
                    <img src={require("../../src/assets/profile.png")} alt="Avatar" className="avatar-img" />
                        <div className="welcome-text">
                            <h2>Welcome</h2>
                            <p>Please login to access the system.</p>
                        </div>
                    </div>
                    <div className="login-right">
                        <h2>Welcome to login system</h2>
                        <p>Please enter your username and password</p>
                        <input type="text" placeholder="Username" className="login-input" />
                        <input type="password" placeholder="Password" className="login-input" />
                        <button className="login-button">LOGIN</button>
                        <div className="social-icons">
                            <FaFacebookF className="icon" />
                            <FaTwitter className="icon" />
                            <FaGoogle className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Login;
