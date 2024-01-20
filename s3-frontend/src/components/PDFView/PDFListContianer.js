import React from "react";
import PDFContainer from "./PDFContainer";

const PDFListContianer = ({documents}) => {
    return (
        <div className="pdf-list-container">
            {documents.map(document => (
                <PDFContainer key={document.name} name={document.name} date={document.date} file={document.pdf_file}/>
            ))}
        </div>
    );
};

export default PDFListContianer;