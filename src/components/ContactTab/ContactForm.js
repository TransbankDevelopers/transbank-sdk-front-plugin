import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

export default function ContactForm({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(true);
    const [ecommerceConfig, setEcommerceConfig] = useState(true);
    const toast = useRef(null);

    useEffect(() => {
        loadData();
    }, []); 

    const formik = useFormik({
        initialValues: {
            commerceName: '',
            commerceEmail: '',
            commerceResponsible: '',
            integratorName: '',
            integratorEmail: ''
        },
        validate: (data) => {
            let errors = {};

            return errors;
        },
        onSubmit: async(data) => {
            try {
                let resp = await tbkService.saveContact(data);
                formik.setValues({
                    ...resp
                });
                toast.current.show({severity:'success', summary: 'Success', detail:'Se actualizó correctamente', life: 3000});
            } catch (error) {
                let message = error.message || 'Ocurrió un error'
                console.error(message);
                toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
            }
        }
    });

    const loadData = async() => {
        setLoading(true);
        let respEc = await tbkService.getEcommerceConfig({ });
        setEcommerceConfig(respEc);

        let resp = await tbkService.getContact({ });
        formik.setValues({
            ...resp
          });
        setLoading(false); 
    }

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className="form-tbk-config-container">
            <Toast ref={toast} />
            <div className="flex justify-content-center">
                <div className="form-tbk-config">
                {loading ? (
                    <ProgressSpinner />
                    ) : (
                    <>
                    
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <Message severity="info" text={"ID: " + ecommerceConfig.ecommerceInstalationId} />
                        </div>
                        
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="commerceName" name="commerceName" value={formik.values.commerceName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('commerceName') })} />
                                <label htmlFor="commerceName" className={classNames({ 'p-error': isFormFieldValid('commerceName') })}>Nombre de Ecommerce</label>
                            </span>
                            {getFormErrorMessage('commerceName')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="commerceEmail" name="commerceEmail" value={formik.values.commerceEmail} onChange={formik.handleChange} keyfilter="email" autoFocus className={classNames({ 'p-invalid': isFormFieldValid('commerceEmail') })} />
                                <label htmlFor="commerceEmail" className={classNames({ 'p-error': isFormFieldValid('commerceEmail') })}>Correo de responsable de Ecommerce</label>
                            </span>
                            {getFormErrorMessage('commerceEmail')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="commerceResponsible" name="commerceResponsible" value={formik.values.commerceResponsible} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('commerceResponsible') })} />
                                <label htmlFor="commerceResponsible" className={classNames({ 'p-error': isFormFieldValid('commerceResponsible') })}>Responsable de Ecommerce</label>
                            </span>
                            {getFormErrorMessage('commerceResponsible')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="integratorEmail" name="integratorEmail" value={formik.values.integratorEmail} onChange={formik.handleChange} keyfilter="email" autoFocus className={classNames({ 'p-invalid': isFormFieldValid('integratorEmail') })} />
                                <label htmlFor="integratorEmail" className={classNames({ 'p-error': isFormFieldValid('integratorEmail') })}>Correo de Integrador</label>
                            </span>
                            {getFormErrorMessage('integratorEmail')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="integratorName" name="integratorName" value={formik.values.integratorName} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('integratorName') })} />
                                <label htmlFor="integratorName" className={classNames({ 'p-error': isFormFieldValid('integratorName') })}>Integrador</label>
                            </span>
                            {getFormErrorMessage('integratorName')}
                        </div>
                    </form>
                    <div className="grid p-fluid">
                        <div className="col-12">
                            <Button label="Guardar" className="mt-2" onClick={formik.handleSubmit} />
                        </div>
                    </div>
                    </>
                    )}

                </div>
            </div>
        </div>
    );
}
