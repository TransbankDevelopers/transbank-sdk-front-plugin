import React, {useState, useEffect} from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import TransaccionStatus from './TransaccionStatus';
import { InputTextarea } from 'primereact/inputtextarea';
import { Tag } from 'primereact/tag';
import { TRANSACTION_STATUS_SEVERITY, TRANSACTION_TBK_STATUS_SEVERITY } from '../../util/SeverityConstants';
import { TRANSACTION_STATUS_PREPARED, TRANSACTION_TBK_STATUS_AUTHORIZED, TRANSACTION_TBK_STATUS_PARTIALLY_NULLIFIED } from '../../util/TbkConstants';
import TransaccionRefund from './TransaccionRefund';
import { TRANSACTION_TBK_REFUND_SEVERITY } from '../../util/SeverityConstants';

export default function TransaccionDetail({env, ecommerce, recordId, record, refreshGrid}) {
    const [loading, setLoading] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [showRefund, setShowRefund] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setShowStatus(false);
        setShowRefund(false);
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
                attribute: 'Código de Comercio',
                value: record.commerceCode
            },
            {
                attribute: 'Código de Comercio Hijo',
                value: record.childCommerceCode
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
                attribute: 'OrderId',
                value: record.orderId
            },
            {
                attribute: 'BuyOrder',
                value: record.buyOrder
            },
            {
                attribute: 'ChildBuyOrder',
                value: record.childBuyOrder
            },
            {
                attribute: 'Usuario Oneclick',
                value: record.oneclickUsername
            },
            {
                attribute: 'Token',
                value: record.token
            },
            {
                attribute: 'Estado',
                value: record.status,
                isStatus: true
            },
            {
                attribute: 'Estado Transbank',
                value: record.transbankStatus,
                isTransbankStatus: true
            },
            {
                attribute: 'Ultimo Tipo Refund',
                value: record.lastRefundType,
                isTransbankRefund: true
            },
            {
                attribute: 'Monto',
                value: record.amount
            },
            {
                attribute: 'Monto Refund',
                value: record.refundAmount
            },
            {
                attribute: 'SessionId',
                value: record.sessionId
            },
            {
                attribute: 'Transbank Response',
                value: record.transbankResponse,
                isLongText: true
            },
            {
                attribute: 'Ultimo Refund',
                value: record.lastRefundResponse,
                isLongText: true
            },
            {
                attribute: 'Historial Refund',
                value: record.allRefundResponse,
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

    const status = async() => {
        setShowStatus(true);
        setShowRefund(false);
    };

    const refund = async() => {
        setShowRefund(true);
        setShowStatus(false);
    };

    const valueBodyTemplate = (record) => {
        let value = record.value;
        if (value==null){
            return '';
        }
        else if (record.isLongText){
            return <div className="p-fluid"><InputTextarea value={value} readOnly rows={5} /></div>;
        }
        else if (record.isStatus){
            let severity = TRANSACTION_STATUS_SEVERITY[value];
            if (severity){
                return <Tag value={value} severity={severity}></Tag>;
            }
        }
        else if (record.isTransbankStatus){
            let severity = TRANSACTION_TBK_STATUS_SEVERITY[value];
            if (severity){
                return <Tag value={value} severity={severity}></Tag>;
            }
        }
        else if (record.isTransbankRefund){
            let severity = TRANSACTION_TBK_REFUND_SEVERITY[value];
            if (severity){
                return <Tag value={value} severity={severity}></Tag>;
            }
        }
        return value;
    };

    const hasRefund = (record) => {
        return (record.transbankStatus === TRANSACTION_TBK_STATUS_AUTHORIZED || 
            record.transbankStatus === TRANSACTION_TBK_STATUS_PARTIALLY_NULLIFIED) &&
            (record.amount > record.refundAmount);
    }

    return (
        <div className="p-2 border-1 border-300 border-round">
            <div className="grid">
                <div className="col-6">
                    <h3>Últimas transacciones</h3>
                </div>
                <div className="col-6">
                    <div className="flex align-items-center justify-content-end gap-2">
                        <Button type="button" disabled={record.status === TRANSACTION_STATUS_PREPARED} 
                                onClick={status} outlined label="Status Transbank" />
                        <Button type="button" disabled={!hasRefund(record)} 
                                onClick={refund} outlined label="Refund Transbank" />
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <DataTable scrollable scrollHeight="400px" value={data} size={'small'} loading={loading} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                        <Column field="attribute" header="Atributo" frozen className="font-bold" style={{ width: '250px' }} ></Column>
                        <Column field="value" header="Valor" body={valueBodyTemplate} ></Column>
                    </DataTable>
                </div>
                
                {showStatus ? (
                    <div className="flex-1">
                        <TransaccionStatus env={env} ecommerce={ecommerce} recordId={record.id} record={record} />
                    </div>
                ) : (
                    <></>
                )}

                {showRefund ? (
                    <div className="flex-1">
                        <TransaccionRefund env={env} 
                            ecommerce={ecommerce} 
                            recordId={record.id} 
                            record={record} 
                            refreshGrid={refreshGrid} 
                            refreshGridDetail={load}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
