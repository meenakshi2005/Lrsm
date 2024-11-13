
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login.css";
import { AuthContext } from "./AuthContext";
import { login_api } from "../api/api";
import logo from '../HB_logo_passworgpannel-removebg-preview.png'

export default function Login({onLogin}) {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("KGMI123456");
  const [password, setPassword] = useState("pass@123");
  const navigate = useNavigate(); 
  async function handleLogin() {
    const data = {
      email,
      password,
    };
    const res = await login_api(data);
    console.log(res);

    if (res.statuscode === 1) {
      // alert(res.message);
      onLogin(res.token, res?.studentid, data?.email);
      window.location.href = "/#/home";
    } else {
      alert(res.message, "Invalid user email and password");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div
              className="col-12 col-md-6 "
              style={{ backgroundColor: "white" }}
            >
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="col-10 col-xl-8 py-3 text-center">
              <div className="d-flex align-items-center justify-content-center h-100">

                  <img
                    className="img-fluid rounded mb-4"
                    loading="lazy"
                    src={logo}
                    width="80"
                    height="40"
                    alt="BootstrapBrain Logo"
                  />
                  </div>
                  {/* <hr className="border-primary-subtle mb-4" /> */}
                  <h2 className="h1 mb-4">
                    Welcome to HBITS College of Insurance
                  </h2>
                  <p className="lead m-0">
                    {/* We write words, take photos, make videos, and interact with
                    artificial intelligence. */}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6"
              style={{ backgroundColor: "lightgrey" }}
            >
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h3>Log in</h3>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="name"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn"
                         
                          type="submit"
                          style={{
                            backgroundColor: "darkblue",
                            color: "white",
                          }}
                        >
                          Sign in 
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
