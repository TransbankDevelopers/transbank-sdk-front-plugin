import React, {useState, useEffect} from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputTextarea } from 'primereact/inputtextarea';

export default function ApiServiceLogDetail({env, ecommerce, recordId, record}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        load();
    }, [recordId]);

    const load = () => {
        setLoading(true);
        let rows = [
            {
                attribute: 'Id',
                value: record.id
            },
            {
                attribute: 'Ambiente',
                value: record.environment
            },
            {
                attribute: 'Producto',
                value: record.product
            },
            {
                attribute: 'Servicio',
                value: record.service
            },
            {
                attribute: 'Código de Comercio',
                value: record.commerceCode
            },
            {
                attribute: 'Fecha Creación',
                value: record.createdAt
            },
            {
                attribute: 'BuyOrder',
                value: record.buyOrder
            },
            {
                attribute: 'Entrada',
                value: record.input,
                isLongText: true
            },
            {
                attribute: 'Salida',
                value: record.response,
                isLongText: true
            },
            {
                attribute: 'Error',
                value: record.error
            },
            {
                attribute: 'Err. Original',
                value: record.originalError,
                isLongText: true
            },
            {
                attribute: 'Err. Particular',
                value: record.customError,
                isLongText: true
            }
        ];
        for (let index = 0; index < rows.length; index++) {
            rows[index]['id'] = index;
        }
        setData(rows);
        setLoading(false);
    }

    const valueBodyTemplate = (record) => {
        let value = record.value;
        if (value==null){
            return '';
        }
        else if (record.isLongText){
            return <div className="p-fluid"><InputTextarea value={value} readOnly rows={5} /></div>;
        }
        return value;
    };

    return (
        <div className="p-2 border-1 border-300 border-round">
            <DataTable scrollable scrollHeight="400px" value={data} size={'small'} loading={loading} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column field="attribute" header="Atributo" frozen className="font-bold" style={{ width: '250px' }} ></Column>
                <Column field="value" header="Valor" body={valueBodyTemplate} ></Column>
            </DataTable>
        </div>
        
    );
}
