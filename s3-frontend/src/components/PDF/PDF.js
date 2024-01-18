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

    return (
        <div className="pdf-page">
            <div className="header">Add PDF</div>
            <form>
                <TextField label="PDF Name" variant="outlined" value={name} onChange={(value) => setName(value)} />
                <PDFDatePicker date={date} setDate={setDate} />
                <PDFInput file={file} setFile={setFile} />
                <Button variant="outlined" sx={{borderColor: "black", color: "black"}}>Submit</Button>
            </form>
        </div>
    );
};

export default PDF;