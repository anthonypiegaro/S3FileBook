import React from "react";
import Iframe from "react-iframe";

const PDFViewer = ({file}) => {
    return (
        <Iframe 
            url={file}
        />
    );
};

export default PDFViewer;