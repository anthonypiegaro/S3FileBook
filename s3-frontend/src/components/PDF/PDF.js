import React, { useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PDFDatePicker from "./PDFDatePicker";
import PDFInput from "./PDFInput";
import dayjs from "dayjs";
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from "../Navbar/Navbar";

const PDF = () => {
    const [date, setDate] = useState(dayjs());
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [inputsValidState, setInputsValidState] = useState({"name": true, "date": true, "file": true});

    const validate = () => {
        const fileStatus = Boolean(file);
        const nameStatus = Boolean(name);
        const dateStatus = date.isValid();

        setInputsValidState({
            "name": nameStatus,
            "date": dateStatus,
            "file": fileStatus
        });

        return (fileStatus && nameStatus && dateStatus)
    }

    const handleSubmit = async () => {
        setLoading(true);

        if (!validate()) {
            setLoading(false);
            return null;
        };

        const data = {
            "name": name,
            "date": date.format("YYYY-MM-DD"),
            "file": file,
        };

        const formData = new FormData();

        formData.append("name", name);
        formData.append("date", date.format("YYYY-MM-DD"));
        formData.append("file", file);

        await fetch("http://127.0.0.1:8000/pdf-handler-api/documents/", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: formData
        })
        .then(async response => {
            if (response.ok) {
                return response.json();
            } else {
                const errorData = await response.json();
                setError(errorData.detail);
                throw new Error("Invalid credentials");
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));

        setLoading(false);
    }

    return (
        <div className="pdf-page">
            <Navbar />
            <div className="header">Add PDF</div>
            <form>
                <TextField label="PDF Name" variant="outlined" error={!inputsValidState["name"]} value={name} onChange={(event) => setName(event.target.value)} />
                <PDFDatePicker date={date} setDate={setDate} />
                <PDFInput file={file} setFile={setFile} error={!inputsValidState["file"]}/>
                <Button variant="outlined" sx={{borderColor: "black", color: "black"}} onClick={handleSubmit}>
                    {loading ? <CircularProgress /> : <>Submit</> }
                </Button>
                {error && <p style={{textAlign: "center"}}>{error}</p>}
            </form>
        </div>
    );
};

export default PDF;