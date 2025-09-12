import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function FormDatepicker({ value, onChange }) {
    return (
        <DatePicker
            selected={value}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            className="bg-white border-gray-300  rounded-md  shadow-sm focus:border-violet-500 focus:ring-violet-500"
        />
    );
}
