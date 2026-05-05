import "./nav.css"
import React from "react"
import { CiSearch } from "react-icons/ci";
import { useNavigate, Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";

const nav = () => {
     const navigate = useNavigate();
    return (
        <nav className="nav-section">
            <h2 className="logo">Bite Bliss</h2>


            <div className="nav-actions">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/create-recipe">Create Recipe</Link>
                </div>
            </div>
            
            <div className="button">
                <button className="cookbook-btn" onClick={() => {
                  navigate('/login')
              }}>
                    <IoBookOutline />
                    <span>Log In</span>
                </button>

                <button className="cookbook" onClick={() => {
                  navigate('/signin')
              }}>
                    <IoBookOutline />
                    <span>Sign In</span>
                </button>
            </div>
        </nav>
    )
}

export default nav