import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [validation, setValidation] = useState({"username": true,"password": true});
    const navigate = useNavigate();

    const handleSignIn = async () => {
        setLoading(true);

        if (!validate()) {
            setLoading(false);
            return null;
        }

        
        try {
            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.access);
                navigate("/pdf"); // Use navigate function to navigate
            } else {
                const errorData = await response.json();
                setError(errorData.detail);
                throw new Error("Invalid credentials");
            }
        } catch (error) {
                console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const validate = () => {
        const usernameValid = Boolean(username);
        const passwordValid = Boolean(password);

        setValidation({
            "username": usernameValid,
            "password": passwordValid,
        });

        return (usernameValid && passwordValid);
    };

    return (
        <div className="login-page">
            <div className="header">Sign In</div>
            <form onSubmit={handleSignIn}>
                <TextField id="username" label="username" variant="outlined" error={!validation["username"]} autoComplete="off" onChange={(event) => setUsername(event.target.value)} />
                <TextField id="password" label="password" type="password" variant="outlined" error={!validation["password"]} onChange={(event) => setPassword(event.target.value)} />
                <Button variant="outlined" sx={{borderColor: "black", color: "black"}} onClick={handleSignIn}>
                    {loading ? <CircularProgress /> :  <>Sign In</> }
                </Button>
                {error && <p style={{ textAlign: "center"}}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;