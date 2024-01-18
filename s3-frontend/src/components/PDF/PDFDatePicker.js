import React from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PDFDatePicker = ({date, setDate}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
            <DatePicker 
                label="Date" 
                value={date}
                onChange={(date) => setDate(date)}
            />
        </DemoContainer>
        </LocalizationProvider>
    );
};

export default PDFDatePicker;