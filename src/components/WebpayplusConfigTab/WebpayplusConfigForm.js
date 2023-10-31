import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { TextField } from '../Form/TextField';
import { CheckboxField } from '../Form/CheckboxField.js';
import { DropdownField } from '../Form/DropdownField';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';
import TbkValidationUtil from '../../util/TbkValidationUtil';

export default function  WebpayplusConfigForm({env, ecommerce}) {
    const [statusList, setStatusList] = useState([]);
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(true);
    const toast = useRef(null);

    useEffect(() => {
        loadData();
    }, []); 

    const formik = useFormik({
        initialValues: {
            commerceCode: '',
            apikey: '',
            orderStatusAfterPayment: null,
            production: false,
            active: false,
        },
        validate: (data) => {
            let errors = {};
            errors.commerceCode = TbkValidationUtil.validateCommerceCode(data.commerceCode);
            errors.apikey = TbkValidationUtil.validateApikey(data.apikey);
            return errors;
        }
    });

    const handleSave = async() => {
        try {
            setLoading(true);
            let resp = await tbkService.saveWebpayplusConfig(formik.values);
            formik.setValues({
                ...resp
            });
            setLoading(false);
            toast.current.show({severity:'success', summary: 'Success', detail:'Se actualizó correctamente', life: 3000});
        } catch (error) {
            let message = error.message || 'Ocurrió un error'
            console.error(message);
            setLoading(false);
            toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
        }
    }

    const loadData = async() => {
        setLoading(true);
        let base = await tbkService.getEcommerceConfig({ });
        setStatusList(base.listOrderStatusAfterPayment);

        let resp = await tbkService.getWebpayplusConfig({ });
        formik.setValues({
            ...resp
        });
        setLoading(false);
    }

    const handleReset = async() => {
        try {
            setLoading(true);
            let resp = await tbkService.resetWebpayplusConfig();
            formik.setValues({
                ...resp
            });
            setLoading(false);
            toast.current.show({severity:'success', summary: 'Success', detail:'Se reseteo correctamente', life: 3000});
        } catch (error) {
            let message = error.message || 'Ocurrió un error'
            console.error(message);
            setLoading(false);
            toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
        }
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
                        <form className="p-fluid">
                            <CheckboxField formik={formik} fieldName="active" label="Activo" />
                            <CheckboxField formik={formik} fieldName="production" label="Producción" />
                            <DropdownField formik={formik} fieldName="orderStatusAfterPayment" label="Estado Pago Aceptado" options={statusList} />
                            <TextField formik={formik} fieldName="commerceCode" label="Código de Comercio*" />
                            <TextField formik={formik} fieldName="apikey" label="Api Key (llave secreta)" />
                        </form>
                        <div className="grid p-fluid">
                            <div className="col-6">
                                <Button label="Guardar" className="mt-2" onClick={handleSave} />
                            </div>
                            <div className="col-6">
                                <Button label="Reset" className="mt-2" onClick={handleReset} />
                            </div>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
