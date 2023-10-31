import React, {useRef, useState} from 'react';
import { TbkService } from '../../service/TbkService';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';

export default function PluginCheck({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const toast = useRef(null);

    const isObject = (value) => {
        return typeof value === "object" && value !== null;
    };

    const checkPlugin = async() => {
        setLoading(true);
        let rows = [];
        let resp = await tbkService.checkPlugin();
        for (const property in resp) {
            let item = {};
            if (property === 'ok'){
                continue;
            }
            item['attribute'] = property;
            let value = resp[property];
            if (isObject(value)){
                item['ok'] = value['ok'];
                item['error'] = value['error'];
                item['value'] = JSON.stringify(value['result'] || {});
            }
            else{
                item['ok'] = value==null;
                item['value'] = value;
            }
            rows.push(item);
        }
        for (let index = 0; index < rows.length; index++) {
            rows[index]['id'] = index;
        }
        setData(rows);
        setLoading(false);
    };

    const createTables = async() => {
        try {
            let resp = await tbkService.createTables();
            if (resp['ok']){
                toast.current.show({severity:'success', summary: 'Success', detail:'Se ejecuto la tarea exitosamente', life: 3000});
            }
            else{
                console.error(resp);
                toast.current.show({severity:'error', summary: 'Error', detail: JSON.stringify(resp), life: 3000});
            }
        } catch (error) {
            let message = error.message || 'Ocurrió un error'
            console.error(message);
            toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
        }
    }

    const header = (
        <div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" outlined onClick={checkPlugin} label="Check Plugin Status" />
            <Button type="button" outlined onClick={createTables} label="Crear tablas si no existen" />
        </div>
    );

    const statusBodyTemplate = (record) => {
        let severity = record.ok ? 'success' : 'danger';
        let value = record.ok ? 'OK' : 'ERROR';
        return <Tag value={value} severity={severity}></Tag>;
    };

    return (
        <>
        <Toast ref={toast} />
        <DataTable header={header} scrollable scrollHeight="400px" value={data} size={'small'} loading={loading} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
            <Column field="attribute" header="Atributo" frozen className="font-bold" style={{ width: '250px' }}></Column>
            <Column field="ok" header="Status"  body={statusBodyTemplate}  ></Column>
            <Column field="value" header="Valor"></Column>
        </DataTable>
        </>
    );
}
