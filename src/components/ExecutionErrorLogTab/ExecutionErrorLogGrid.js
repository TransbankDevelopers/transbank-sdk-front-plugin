import React, { useState, useEffect } from 'react';
import { FilterMatchMode, SortOrder } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TbkService } from '../../service/TbkService';
import { environmentFilterTemplate, productFilterTemplate, serviceFilterTemplate } from '../../util/GridFilterTemplateUtil';
import ExecutionErrorLogDetail from './ExecutionErrorLogDetail';
import { Button } from 'primereact/button';
import moment from 'moment/moment';
import { jsonToFileDownload } from '../../util/ExcelUtil';

export default function ExecutionErrorLogGrid({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [records, setRecords] = useState(null);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const defaultFilters = {
        first: 0,
        rows: 10,
        page: 1,
        sortField: 'id',
        sortOrder: SortOrder.DESC,
        filters: {
            buyOrder: { value: null, matchMode: FilterMatchMode.CONTAINS },
            service: { value: null, matchMode: FilterMatchMode.EQUALS },
            environment: { value: null, matchMode: FilterMatchMode.EQUALS },
            product : { value: null, matchMode: FilterMatchMode.EQUALS },
        }
    };
    const [lazyState, setlazyState] = useState({
        ...defaultFilters
    });
 
    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = async() => {
        setLoading(true);
        let resp = await tbkService.getListExecutionErrorLog(lazyState);
        setTotalRecords(resp.total);
        setRecords(resp.data);
        setLoading(false);
    };

    const onPage = (event) => {
        setlazyState(event);
    };

    const onSort = (event) => {
        setlazyState(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setlazyState(event);
        setSelectedRecord(null);
    };

    const onSelectionChange = (event) => {
        const value = event.value;
        setSelectedRecord(value);
    };

    const refresh = () => {
        loadLazyData();
    }

    const clearFilter = () => {
        setlazyState(defaultFilters);
    };

    const exportCsv = async() => {
        setLoading(true);
        let filter = {
            ...lazyState,
            rows: 100000,
            first: 0
        };
        let resp = await tbkService.getListExecutionErrorLog(filter);
        if (resp.data){
            let labels = Object.keys(resp.data[0]);
            let names = Object.keys(resp.data[0]);
            jsonToFileDownload(labels, names, resp.data, `eel_${moment(new Date()).format('YYYY-MM-DD_HH:mm:ss')}.xlsx`);
        }
        setLoading(false);
    };

    const header = (
        <div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" icon="pi pi-refresh" label="Refrescar" outlined onClick={refresh} data-pr-tooltip="Refrescar" />
            <Button type="button" icon="pi pi-filter-slash" label="Borrar Filtros" outlined onClick={clearFilter} />
            <Button type="button" icon="pi pi-file" label="Exportar" outlined onClick={exportCsv} />
        </div>
    );

    return (
        <>
            <DataTable value={records} lazy filterDisplay="row" dataKey="id" paginator size={'small'} header={header}
                currentPageReportTemplate="{first} al {last} de {totalRecords} registro(s)"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '75rem' }}
                selectionMode="single" selection={selectedRecord} onSelectionChange={onSelectionChange}>
                <Column field="id" header="Id" sortable style={{ width: '50px' }}></Column>
                <Column field="environment" header="Ambiente" filter filterElement={environmentFilterTemplate} showFilterMenu={false} style={{ width: '100px' }}></Column>
                <Column field="product" header="Producto" filter filterElement={productFilterTemplate} showFilterMenu={false} style={{ width: '100px' }}></Column>
                <Column field="service" header="Servicio" filter filterElement={serviceFilterTemplate} showFilterMenu={false} style={{ width: '100px' }}></Column>
                <Column field="commerceCode" header="Código comercio" style={{ width: '100px' }}></Column>
                <Column field="buyOrder" header="BuyOrder" filter showFilterMenu={false} style={{ width: '100px' }}></Column>
                <Column field="error" header="Error" style={{ width: '100px' }}></Column>
                <Column field="createdAt" header="Fecha Creación"  sortable style={{ width: '100px' }}></Column>
            </DataTable>
            
            {selectedRecord ? (
                <ExecutionErrorLogDetail env={env} ecommerce={ecommerce} recordId={selectedRecord.id} record={selectedRecord} />
            ) : (
                <></>
            )}
        </>
    );
}
