import React, { useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PDFDatePicker from "./PDFDatePicker";
import PDFInput from "./PDFInput";
import dayjs from "dayjs";

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

        console.log(fileStatus && nameStatus && dateStatus);

        return (fileStatus && nameStatus && dateStatus)
    }

    return (
        <div className="pdf-page">
            <div className="header">Add PDF</div>
            <form>
                <TextField label="PDF Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
                <PDFDatePicker date={date} setDate={setDate} />
                <PDFInput file={file} setFile={setFile} />
                <Button variant="outlined" sx={{borderColor: "black", color: "black"}} onClick={validate}>Submit</Button>
            </form>
        </div>
    );
};

export default PDF;