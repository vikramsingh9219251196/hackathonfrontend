import React, { useState, useEffect, useRef } from "react";
import loginImg from "../../assets/login.jpg";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formRef = useRef(null);
  const imgRef = useRef(null);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5 }
    );

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5 },
      "-=0.3"
    );

    tl.fromTo(
      "input, button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.5 },
      "-=0.3"
    );
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success(data.message, toastOptions);
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error(data.message || "Login failed!", toastOptions);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login. Please try again later.", toastOptions);
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-content">
          <div className="form-container" ref={formRef}>
            <h2>Login</h2>
            <form className="login-form" onSubmit={loginUser}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
            <div className="auth-link">
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </div>
          </div>
          <div className="img-container" ref={imgRef}>
            <img src={loginImg} alt="login" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;