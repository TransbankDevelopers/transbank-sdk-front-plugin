import React from 'react';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

export default function CheckboxField({formik, fieldName, label}) {
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    return (
        <div className="field-checkbox">
            <Checkbox id={fieldName} name={fieldName} checked={formik.values[fieldName]} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid(fieldName) })} />
            <label htmlFor={fieldName} className={classNames({ 'p-error': isFormFieldValid(fieldName) })}>{label}</label>
        </div>
    );  
}
