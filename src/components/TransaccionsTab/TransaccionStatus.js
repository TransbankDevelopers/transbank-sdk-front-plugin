import React, { useState, useEffect, useRef } from 'react';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputTextarea } from 'primereact/inputtextarea';
import { Panel } from 'primereact/panel';
import { Toast } from 'primereact/toast';

export default function TransaccionStatus({env, ecommerce, recordId, record}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('');
    const toast = useRef(null);
    useEffect(() => {
        loadData();
    }, [recordId]);

    const loadData = async() => {
        try {
            setLoading(true);
            setText('');
            let resp = await tbkService.executeTbkStatus({
                buyOrder: record['buyOrder']
            });
            setText(JSON.stringify(resp));
            setLoading(false);
            toast.current.show({severity:'success', summary: 'Success', detail:'Se ejecutó el status correctamente', life: 3000});
        } catch (error) {
            setLoading(false);
            let message = error.message || 'Ocurrió un error'
            console.error(message);
            toast.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
        }
    }

    return (
        <Panel header="Status Transbank">
            <Toast ref={toast} />
            {loading ? (
                <div className="flex justify-content-center">
                    <ProgressSpinner />
                </div>
            ) : (
                <div className="p-fluid"><InputTextarea value={text} readOnly rows={10} /></div>
            )}
        </Panel>
    );
}
