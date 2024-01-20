import React from "react";
import PDFViewer from "./PDFViewer";

const PDFContainer = ({name, date, file}) => {
    return (
        <div className="pdf-container">
            <div className="pdf-container-name">{name}</div>
            <div className="pdf-container-date">{date}</div>
            <PDFViewer file={file} />
        </div>
    );
};

export default PDFContainer;