import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gsap } from "gsap";
import registerImg from "../../assets/register.jpg";
import "./auth.css";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "",
    location: "",
  };

  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword, phone, role, location } = formData;
  const [currentUserId, setCurrentUserId] = useState(null); 
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
      { opacity: 1, x: 0, duration: 1 }
    );

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    );

    tl.fromTo(
      "input, button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
   
    try {
        const response = await fetch("https://hackathonbackend-s7wr.onrender.com/api/v1/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                confirmPassword,
                phone,
                role,
                location,
            }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
            setCurrentUserId(data.userId); 
            toast.success(data.message, toastOptions);
            setTimeout(() => {
                if (role === "rag picker") {
                    navigate("/login"); 
                } else if (role === "user") {
                    navigate("/login");
                }
            }, 2000);
        } else {
            toast.error(data.message || "Registration failed!", toastOptions);
        }
    } catch (error) {
        console.error("Error during registration:", error);
        toast.error("An error occurred during registration. Please try again later.", toastOptions);
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-content">
          <div className="form-container" ref={formRef}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Phone number"
                required
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Location"
                required
                name="location"
                value={location}
                onChange={handleInputChange}
              />
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="rag picker"
                    onChange={handleInputChange}
                  />
                  Rag Picker
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    onChange={handleInputChange}
                  />
                  User
                </label>
              </div>
              <button type="submit">Register</button>
            </form>
            <div className="auth-link">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className="img-container" ref={imgRef}>
            <img src={registerImg} alt="register" />
          </div>
        </div>
      </div>
      {currentUserId && <p>Current User ID: {currentUserId}</p>}
      <ToastContainer />
    </>
  );
};

export default Register;
