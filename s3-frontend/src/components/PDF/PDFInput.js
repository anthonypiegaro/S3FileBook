import React from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from "@mui/material/Button";

const PDFInput = ({file, setFile, error}) => {

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const borderColor = error ? "red" : "black";

    return (
        <div className="upload-file-btn">
            <input
                accept=".pdf" // Specify accepted file types if needed
                style={{ display: 'none' }} // Hide the default file input
                id="contained-button-file"
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="contained-button-file">
                <Button
                variant="outlined"
                component="span"
                sx={{borderColor: "black", color: "black"}}
                startIcon={<CloudUploadIcon />}
                style={{borderColor: borderColor}}
                >
                Upload File
                </Button>
            </label>
            {file && (
                <p>Selected File: {file.name}</p>
            )}
        </div>
    );
};

export default PDFInput;