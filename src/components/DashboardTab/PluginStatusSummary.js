import React, { useEffect, useState } from 'react'; 
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import TabConstants from '../../util/TabConstants';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function PluginStatusSummary({env, ecommerce, img, setTabActive}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        loadData();
    }, []); 

    const loadData = async() => {
        setLoading(true);
        let resp = await tbkService.pluginStatusSummary({ });
        setData(resp);
        setLoading(false); 
    }

    const productSummary = (product) => {
        if (!product.active){
            return (<Tag severity="info" value="No Activo" className="mr-3"></Tag>);
        }
        else if (!product.ok){
            return (<Tag severity="danger" value={product.error} className="mr-3"></Tag>);
        }
        return (
            <>
                <Tag severity="success" value="OK" className="mr-3"></Tag>
                { product.production ? 
                    <Tag severity="success" value="Producción" className="mr-3"></Tag> 
                    : <Tag severity="info" value="Test" className="mr-3"></Tag> 
                }
            </>
        );
    }

    const lastTransaction = (transaction) => {
        if (!transaction.active){
            return <Tag severity="info" value="No Activo" className="mr-3"></Tag>;
        }
        else if (!data.transaction.last){
            return <Tag severity="info" value="No hay transacciones" className="mr-3"></Tag>;
        }
        return (
            <>{data.transaction.last} ({data.transaction.production ? 'Producción' : 'Test'})</> 
        );
    }

    const header = (
        <div className="flex justify-content-center">
            <h3>Resumen</h3>
        </div>
    );

    return (
        <Card header={header} className="h-full" >
            {loading ? <ProgressSpinner />
                 : (
                <div>
                    <div className="flex border-1 border-400 block p-2 mb-3 font-bold text-left  border-round ">
                        <div className="flex-1 justify-content-center">
                            Plugin 
                        </div>
                        <div className="flex-1 justify-content-center justify-content-end">
                            { data.plugin.ok ? <Tag severity="success" value="OK" className="mr-3"></Tag> 
                                : <Tag severity="danger" value="Error" 
                                        className="mr-3 cursor-pointer" 
                                        onClick={()=>setTabActive(TabConstants.DIAGNOSIS)}>    
                                   </Tag> 
                            }
                            { data.plugin.warning && <Tag severity="warning" value={data.plugin.warning} className="mr-3"></Tag> }
                        </div>
                    </div>
                    <div className="flex border-1 border-400 block p-2 mb-3 font-bold text-left  border-round ">
                        <div className="flex-1 justify-content-center">
                            Webpayplus
                        </div>
                        <div className="flex-1 justify-content-center justify-content-end">
                            {productSummary(data.webpayplus)}
                        </div>
                    </div>
                    <div className="flex border-1 border-400 block p-2 mb-3 font-bold text-left  border-round ">
                        <div className="flex-1 justify-content-center">
                            Webpayplus Mall
                        </div>
                        <div className="flex-1 justify-content-center justify-content-end">
                            {productSummary(data.webpayplusmall)}
                        </div>
                    </div>
                    <div className="flex border-1 border-400 block p-2 mb-3 font-bold text-left  border-round ">
                        <div className="flex-1 justify-content-center">
                            Oneclick
                        </div>
                        <div className="flex-1 justify-content-center justify-content-end">
                            {productSummary(data.oneclick)}
                        </div>
                    </div>
                    <div className="flex border-1 border-400 block p-2 mb-3 font-bold text-left  border-round ">
                        <div className="flex-1 justify-content-center">
                            Ultima Transacción
                        </div>
                        <div className="flex-1 justify-content-center justify-content-end">
                            {lastTransaction(data.transaction)}
                        </div>
                    </div>
                    <div className="flex border-1 border-400 block p-2 mb-3 font-bold text-left  border-round ">
                        <div className="flex-1 justify-content-center">
                            Datos de contacto 
                        </div>
                        <div className="flex-1 justify-content-center justify-content-end">
                            { data.contact.ok ? <Tag severity="success" value="OK" className="mr-3"></Tag> 
                                : <Tag value={data.contact.warning} severity="warning" 
                                        className="mr-3 cursor-pointer" 
                                        onClick={()=>setTabActive(TabConstants.CONTACT)} ></Tag> 
                            }
                        </div>
                    </div>
                </div>
                )
            }
        </Card>
    )
}
