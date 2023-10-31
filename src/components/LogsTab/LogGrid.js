import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TbkService } from '../../service/TbkService';
import moment from 'moment/moment';
import LogDetail from "./LogDetail";

export default function LogGrid({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [records, setRecords] = useState(null);
    const [selectedRecord, setSelectedRecord] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async() => {
        setLoading(true);
        let resp = await tbkService.getLogInfo({});
        setTotalRecords(resp.total);
        setRecords(resp.logs);
        setLoading(false);
    };

    const onSelectionChange = (event) => {
        const value = event.value;
        setSelectedRecord(value);
    };

    const dateBodyTemplate = (rowData) => {
        return moment(rowData.modified * 1000).format('YYYY-MM-DD HH:mm:ss');
    };

    return (
        <>
            <DataTable value={records} dataKey="filename" paginator size={'small'}
                    currentPageReportTemplate="{first} al {last} de {totalRecords} registro(s)"
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    rows={5} totalRecords={totalRecords}  
                    loading={loading} tableStyle={{ minWidth: '75rem' }}
                    selectionMode="single" selection={selectedRecord} onSelectionChange={onSelectionChange}>
                <Column field="filename" header="Archivo" sortable ></Column>
                <Column field="modified" header="Última modificación" sortable body={dateBodyTemplate} style={{ width: '25%' }}></Column>
            </DataTable>
            
            {selectedRecord ? (
                <LogDetail env={env} ecommerce={ecommerce} filename={selectedRecord.filename} ></LogDetail>
            ) : (
                <></>
            )}
        </>
    );
}
