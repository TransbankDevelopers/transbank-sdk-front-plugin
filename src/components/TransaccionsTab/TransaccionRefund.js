import React, { useState, useEffect, useRef } from 'react';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputTextarea } from 'primereact/inputtextarea';
import { Panel } from 'primereact/panel';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function TransaccionRefund({env, ecommerce, recordId, record, refreshGrid, refreshGridDetail}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);
    const [text, setText] = useState('');
    const refundableAmount = record.amount - record.refundAmount;
    const [maxAmount, setMaxAmount] = useState(refundableAmount);
    const [amount, setAmount] = useState(refundableAmount);
    const [hasRefund, setHasRefund] = useState(refundableAmount > 0);

    const refund = async() => {
        try {
            setLoading(true);
            setText('');
            let resp = await tbkService.executeTbkRefund({
                buyOrder: record['buyOrder'],
                amount: amount
            });
            if (resp['balance'] > 0){
                setAmount(resp['balance']);
                setMaxAmount(resp['balance']);
            }
            else{
                setHasRefund(false);
            }
            setText(JSON.stringify(resp));
            await refreshGrid();
            await refreshGridDetail();
            setLoading(false);
            toast.current.show({severity:'success', summary: 'Success', detail:'Se ejecutó el refund correctamente', life: 3000});
        } catch (error) {
            setLoading(false);
            let message = error.message || 'Ocurrió un error'
            console.error(message);
            toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
        }
    }

    return (
        <Panel header="Refund Transbank">
            <Toast ref={toast} />
            <ul>
                <li>Se 'Reversa' hasta 3 horas de efectuada la confirmación por el monto total y en compras con tarjeta de crédito, débito o prepago.</li>
                <li>Se 'Anula' cuando pasaron mas de 3 horas (En transacciones con tarjeta de débito o prepago solo es posible anular por el monto total, en transacciones con tarjeta de crédito puedes anular por cualquier monto igual o menor al total de la compra.).</li>
                <li>En caso que la transacción haya sido abonada al comercio, la anulación generará una retención en los siguientes abonos por el monto previamente autorizado.</li>
                <li>El comercio tiene un plazo de 90 días desde la fecha de venta para anular transacciones vía servicios web.</li>
            </ul>
            <br/>
            {   hasRefund && 
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber placeholder="Monto" value={amount} min={0} max={maxAmount} onChange={(e) => setAmount(e.value)} />
                    <Button icon="pi pi-wallet" label="Refund" onClick={refund} />
                </div> 
            }
            <br/>
            {loading ? (
                <div className="flex justify-content-center">
                    <ProgressSpinner />
                </div>
            ) : (
                text === '' || <div className="p-fluid"><InputTextarea value={text} readOnly rows={10} /></div>
            )}
        </Panel>
    );
}
