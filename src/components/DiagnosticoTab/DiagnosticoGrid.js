import React, {useState, useEffect} from 'react';
import { TbkService } from '../../service/TbkService';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export default function DiagnosticoGrid({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        load();
    }, []);

    const load = async() => {
        setLoading(true);
        let resp = await tbkService.getDiagnosticoInfo({ });
        let rows = [
            {
                attribute: 'Software E-commerce',
                value: resp?.commerce?.ecommerce
            },
            {
                attribute: 'Versión E-commerce',
                value: resp?.commerce?.currentEcommerceVersion
            },
            {
                attribute: 'Ultima versión E-commerce',
                value: resp?.commerce?.lastEcommerceVersion
            },
            {
                attribute: 'Versión del plugin instalada',
                value: resp?.commerce?.currentPluginVersion
            },
            {
                attribute: 'Última versión del plugin disponible',
                value: resp?.commerce?.lastPluginVersion
            },
            {
                attribute: 'Software del servidor',
                value: resp?.server
            },
            {
                attribute: 'Version de PHP Instalada',
                value: resp?.php?.version
            },
            {
                attribute: 'Extensión openssl',
                value: resp?.phpExtensions?.openssl?.version
            },
            {
                attribute: 'Extensión SimpleXML',
                value: resp?.phpExtensions?.SimpleXML?.version
            },
            {
                attribute: 'Extensión soap',
                value: resp?.phpExtensions?.soap?.version
            },
            {
                attribute: 'Extensión dom',
                value: resp?.phpExtensions?.dom?.version
            }
        ];
        for (let index = 0; index < rows.length; index++) {
            rows[index]['id'] = index + 1;
        }
        setData(rows);
        setLoading(false);
    }
    return (
        <DataTable value={data} dataKey="id" loading={loading} size={'small'} tableStyle={{ minWidth: '50rem' }}>
            <Column field="attribute" header="Atributo" frozen className="font-bold" style={{ width: '250px' }} ></Column>
            <Column field="value" header="Valor"></Column>
        </DataTable>
    );
}

