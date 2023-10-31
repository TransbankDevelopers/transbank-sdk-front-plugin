import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';
import { TextField } from '../Form/TextField';
import { CheckboxField } from '../Form/CheckboxField.js';
import { DropdownField } from '../Form/DropdownField';
import { InputText } from 'primereact/inputtext';
import TbkValidationUtil from '../../util/TbkValidationUtil';
import StringUtils from '../../util/StringUtils';


export default function  ProductMallConfigForm({env, ecommerce, getConfig, resetConfig, saveConfig}) {
    const [statusList, setStatusList] = useState([]);
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(true);
    const [arrayCommerceCode, setArrayCommerceCode] = useState([]);
    const [hasMultistore, setHasMultistore] = useState(false);
    const [ecommerceConfig, setEcommerceConfig] = useState(false);
    const toast = useRef(null);
    
    useEffect(() => {
        loadData();
    }, []); 

    const formik = useFormik({
        initialValues: {
            commerceCode: '',
            childCommerceCode: '',
            apikey: '',
            orderStatusAfterPayment: null,
            production: false,
            active: false,
            multiStore: false
        },
        validate: (data) => {
            let errors = {};
            errors.commerceCode = TbkValidationUtil.validateCommerceCode(data.commerceCode);
            if (data.multiStore) {
                errors.childCommerceCode = TbkValidationUtil.validateCommerceCode(data.childCommerceCode);
            }
            errors.apikey = TbkValidationUtil.validateApikey(data.apikey);
            return errors;
        }
    });

    const validate = (data) => {
        formik.validateForm();
        return false;
        if (!data.multiStore) {
            return true;
        }
        for (const item of arrayCommerceCode) {
            let error = TbkValidationUtil.validateCommerceCode(item.commerceCode);
            if (StringUtils.isNotBlankOrNull(error)){
                error = `${error} (storeId: ${item.storeId})`;
                toast.current.show({severity:'error', summary: 'Error', detail: error, life: 3000});
                return false;
            }
        }
        return true;
    }

    const getChildCommerceByStoreId = (childCommerces, storeId) => {
        if (!(childCommerces && childCommerces.length > 0)){
            return null;
        }
        return childCommerces.find(child => child.storeId === storeId);
    }

    const processMultistore = (stores, data) => {
        if (stores && stores.length > 1){
            setHasMultistore(true);
            let childCommerces = data.arrayChildCommerceCode;
            let arrayCommerce = [];
            for (const store of stores) {
                let child = getChildCommerceByStoreId(childCommerces, store.storeId);
                let commerceCode = child ? child.commerceCode : '';
                arrayCommerce.push({
                    storeId: store.storeId,
                    storeName: store.storeName,
                    commerceCode: commerceCode
                });
            }
            setArrayCommerceCode(arrayCommerce);
            delete data.arrayChildCommerceCode;
        }
    }

    const loadData = async() => {
        setLoading(true);
        let ecommerceConfig = await tbkService.getEcommerceConfig({ });
        setEcommerceConfig(ecommerceConfig);
        setStatusList(ecommerceConfig.listOrderStatusAfterPayment);
        let resp = await getConfig({ });
        processMultistore(ecommerceConfig.stores, resp);
        formik.setValues({
            ...resp
        });
        setLoading(false); 
    }

    const handleSave = async() => {
        try {
            if (!validate(formik.values)){
                return;
            }
            setLoading(true);
            let params = {
                ...formik.values
            }
            let array = [];
            for (const item of arrayCommerceCode) {
                array.push({
                    storeId: item.storeId,
                    commerceCode: item.commerceCode
                });
            }
            params.arrayChildCommerceCode = array;
            let resp = await saveConfig(params);
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

    const handleReset = async() => {
        try {
            setLoading(true);
            let resp = await resetConfig();
            processMultistore(ecommerceConfig.stores, resp);
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

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const onRowEditComplete = (e) => {
        let _rows = [...arrayCommerceCode];
        let { newData, index } = e;
        _rows[index] = newData;
        setArrayCommerceCode(_rows);
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
                    <form  className="p-fluid">
                        <CheckboxField formik={formik} fieldName="active" label="Activo" />
                        <CheckboxField formik={formik} fieldName="production" label="Producción" />
                        {hasMultistore && <CheckboxField formik={formik} fieldName="multiStore" label="Multitienda" />}
                        <DropdownField formik={formik} fieldName="orderStatusAfterPayment" label="Estado Pago Aceptado" options={statusList} />
                        <TextField formik={formik} fieldName="commerceCode" label="Código de Comercio Mall*" />
                        <TextField formik={formik} fieldName="apikey" label="Api Key (llave secreta)" />
                        { !formik?.values?.multiStore && <TextField formik={formik} fieldName="childCommerceCode" label="Código de Comercio*" /> }
                    </form>
                    {   formik?.values?.multiStore &&
                        <DataTable  value={arrayCommerceCode} editMode="row" dataKey="storeId" onRowEditComplete={onRowEditComplete}>
                            <Column field="storeId" header="StoreId" style={{ width: '20%' }}></Column>
                            <Column field="storeName" header="Store Name" ></Column>
                            <Column field="commerceCode" header="Código de Comercio" editor={(options) => textEditor(options)} ></Column>
                            <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        </DataTable>
                    }
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
