import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
    return (
        <div className="login-page">
            <div className="header">Sign In</div>
            <form>
                <TextField id="username" label="username" variant="outlined" />
                <TextField id="password" label="password" type="password" variant="outlined" />
                <Button variant="outlined" sx={{borderColor: "black", color: "black"}}>Sign In</Button>
            </form>
        </div>
    );
};

export default Login;