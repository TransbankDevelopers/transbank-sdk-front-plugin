import React, { useState, useEffect } from 'react';
import { FilterMatchMode, SortOrder } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TbkService } from '../../service/TbkService';
import TransaccionDetail from './TransaccionDetail';
import { environmentFilterTemplate, productFilterTemplate, transactionStatusFilterTemplate, transactionTbkStatusFilterTemplate } from '../../util/GridFilterTemplateUtil';
import { createOrderLinkBodyTemplate, transactionStatusBodyTemplate, transactionTbkStatusBodyTemplate } from '../../util/GridBodyTemplateUtil';
import { Button } from 'primereact/button';
import moment from 'moment/moment';
import { jsonToFileDownload } from '../../util/ExcelUtil';
import { transactionTbkRefundBodyTemplate } from '../../util/GridBodyTemplateUtil';
import { transactionTbkRefundFilterTemplate } from '../../util/GridFilterTemplateUtil';

export default function TransaccionsGrid({env, ecommerce}) {
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
            orderId: { value: null, matchMode: FilterMatchMode.EQUALS },
            buyOrder: { value: null, matchMode: FilterMatchMode.CONTAINS },
            transbankStatus: { value: null, matchMode: FilterMatchMode.EQUALS },
            lastRefundType: { value: null, matchMode: FilterMatchMode.EQUALS },
            environment: { value: null, matchMode: FilterMatchMode.EQUALS },
            status : { value: null, matchMode: FilterMatchMode.EQUALS },
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
        let resp = await tbkService.getListTransaction(lazyState);
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
        let resp = await tbkService.getListTransaction(filter);
        if (resp.data){
            let labels = Object.keys(resp.data[0]);
            let names = Object.keys(resp.data[0]);
            jsonToFileDownload(labels, names, resp.data, `transactions_${moment(new Date()).format('YYYY-MM-DD_HH:mm:ss')}.xlsx`);
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
                    onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '50rem' }} 
                    selectionMode="single" selection={selectedRecord} onSelectionChange={onSelectionChange}>
                <Column field="id" header="Id" sortable style={{ minWidth: '50px' }} ></Column>
                <Column field="environment" header="Ambiente" filter filterElement={environmentFilterTemplate} showFilterMenu={false} ></Column>
                <Column field="product" header="Producto" filter filterElement={productFilterTemplate} showFilterMenu={false} ></Column>
                <Column field="commerceCode" header="Código comercio" ></Column>
                <Column field="orderId" header="OrderId" filter  showFilterMenu={false} body={createOrderLinkBodyTemplate(ecommerce, 'orderId')}  ></Column> 
                <Column field="buyOrder" header="BuyOrder" filter showFilterMenu={false} ></Column>
                <Column field="status" header="Estado" filter filterElement={transactionStatusFilterTemplate} showFilterMenu={false} body={transactionStatusBodyTemplate} ></Column>
                <Column field="transbankStatus" header="Estado Transbank" filter filterElement={transactionTbkStatusFilterTemplate} showFilterMenu={false} body={transactionTbkStatusBodyTemplate} ></Column>
                <Column field="lastRefundType" header="Ultimo Refund" filter filterElement={transactionTbkRefundFilterTemplate} showFilterMenu={false} body={transactionTbkRefundBodyTemplate}  ></Column>
                <Column field="amount" header="Monto" sortable ></Column>
                <Column field="refundAmount" header="Total Refund" sortable  ></Column>
                <Column field="error" header="Error" ></Column>
                <Column field="createdAt" header="Fecha Creación"  sortable ></Column>
                <Column field="updatedAt" header="Fecha Modificación"  sortable ></Column>
            </DataTable>
            
            {selectedRecord ? (
                <TransaccionDetail env={env} 
                    ecommerce={ecommerce} 
                    recordId={selectedRecord.id} 
                    record={selectedRecord} 
                    refreshGrid={refresh}
                />
            ) : (
                <></>
            )}
        </>
    );
}


        