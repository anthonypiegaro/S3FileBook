import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div className="navbar">
            <div className="navbar-logo">S3File</div>
            <div className="navbar-btn" onClick={event => handleClick("/pdf")}>Upload PDF</div>
            <div className="navbar-btn" onClick={event => handleClick("/pdf-view")}>View PDF</div>
            <div className="navbar-logout" onClick={handleLogout}>Logout</div>
        </div>
    );
};

export default Navbar;