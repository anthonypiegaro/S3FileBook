import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import PDFListContianer from "./PDFListContianer";

const PDFView = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDocuments = async () => {
            setLoading(true);

            await fetch("http://127.0.0.1:8000/pdf-handler-api/documents/user/", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(async response => {
                if (response.ok) {
                    return response.json();
                } else {
                    const errorData = await response.json();
                    console.log(errorData);
                    throw new Error(errorData);
                }
            })
            .then(data => {
                setDocuments(data)
                setError("");
            })
            .catch(error => {
                setError("An error occured")
                console.log(error);
            });

            setLoading(false);
        };

        fetchDocuments();
    }, []);

    return (
        <div className="pdf-view-page">
            <div className="header pdf-view-page-header">Your PDF Documents</div>
            {loading && <div className="content-loading"><CircularProgress /></div>}
            {documents.length !== 0 && <PDFListContianer documents={documents} />}
            {error && <div>{error}</div>}
        </div>
    );
};

export default PDFView;