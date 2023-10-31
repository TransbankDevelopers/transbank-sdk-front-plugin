import React, {useState, useEffect} from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputTextarea } from 'primereact/inputtextarea';
import { INSCRIPTIONS_STATUS_SEVERITY } from '../../util/SeverityConstants';
import { Tag } from 'primereact/tag';

export default function InscriptionDetail({env, ecommerce, recordId, record}) {
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
                attribute: 'Código de Comercio',
                value: record.commerceCode
            },
            {
                attribute: 'UserId',
                value: record.userId
            },
            {
                attribute: 'Email',
                value: record.email
            },
            {
                attribute: 'Username',
                value: record.username
            },
            {
                attribute: 'Tipo Tarjeta',
                value: record.cardType
            },
            {
                attribute: 'Tarjeta',
                value: record.cardNumber
            },
            {
                attribute: 'Código Autorización',
                value: record.authorizationCode
            },
            {
                attribute: 'OrderId',
                value: record.orderId
            },
            {
                attribute: 'Token inscripcion',
                value: record.token
            },
            {
                attribute: 'Fecha Creación',
                value: record.createdAt
            },
            {
                attribute: 'Fecha Modificación',
                value: record.updatedAt
            },
            {
                attribute: 'Respuesta',
                value: record.transbankResponse,
                isLongText: true
            },
            {
                attribute: 'Estado',
                value: record.status,
                isStatus: true
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
        else if (record.isStatus){
            let severity = INSCRIPTIONS_STATUS_SEVERITY[value];
            if (severity){
                return <Tag value={value} severity={severity}></Tag>;
            }
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
