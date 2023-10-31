import { InputText } from 'primereact/inputtext';
import React from 'react';
import { classNames } from 'primereact/utils';

export default function TextField({formik, fieldName, label}) {
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className="field">
            <span className="p-float-label">
                <InputText id={fieldName} name={fieldName} value={formik.values[fieldName]} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(fieldName) })} />
                <label htmlFor={fieldName} className={classNames({ 'p-error': isFormFieldValid(fieldName) })}>{label}</label>
            </span>
            {getFormErrorMessage(fieldName)}
        </div>
    );  
}
