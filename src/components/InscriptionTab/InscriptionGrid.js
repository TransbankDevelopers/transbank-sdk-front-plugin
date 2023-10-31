import React, { useState, useEffect } from 'react';
import { FilterMatchMode, SortOrder } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TbkService } from '../../service/TbkService';
import { environmentFilterTemplate, inscriptionStatusFilterTemplate } from '../../util/GridFilterTemplateUtil';
import { inscriptionStatusBodyTemplate } from '../../util/GridBodyTemplateUtil';
import InscriptionDetail from './InscriptionDetail';
import { Button } from 'primereact/button';
import moment from 'moment/moment';
import { jsonToFileDownload } from '../../util/ExcelUtil';

export default function InscriptionGrid({env, ecommerce}) {
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
            username: { value: null, matchMode: FilterMatchMode.CONTAINS },
            email: { value: null, matchMode: FilterMatchMode.CONTAINS },
            cardType: { value: null, matchMode: FilterMatchMode.CONTAINS },
            cardNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
            userId: { value: null, matchMode: FilterMatchMode.EQUALS },
            environment: { value: null, matchMode: FilterMatchMode.EQUALS },
            status : { value: null, matchMode: FilterMatchMode.EQUALS },
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
        let resp = await tbkService.getListInscription(lazyState);
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
        let resp = await tbkService.getListInscription(filter);
        if (resp.data){
            let labels = Object.keys(resp.data[0]);
            let names = Object.keys(resp.data[0]);
            jsonToFileDownload(labels, names, resp.data, `inscriptions_${moment(new Date()).format('YYYY-MM-DD_HH:mm:ss')}.xlsx`);
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
                <Column field="id" header="Id" sortable ></Column>
                <Column field="environment" header="Ambiente" filter filterElement={environmentFilterTemplate} showFilterMenu={false} ></Column>
                <Column field="commerceCode" header="Código Comercio" filter showFilterMenu={false} ></Column>
                <Column field="username" header="Username" filter showFilterMenu={false} ></Column>
                <Column field="email" header="Email" filter showFilterMenu={false} ></Column>
                <Column field="userId" header="UserId" filter showFilterMenu={false} ></Column>
                <Column field="cardType" header="Tipo Tarjeta" filter showFilterMenu={false} ></Column>
                <Column field="cardNumber" header="Tarjeta" filter showFilterMenu={false} ></Column>
                <Column field="status" header="Estado" filter filterElement={inscriptionStatusFilterTemplate} showFilterMenu={false} body={inscriptionStatusBodyTemplate} ></Column>
                <Column field="error" header="Error" style={{ width: '100px' }}></Column>
                <Column field="createdAt" header="Fecha Creación"  sortable ></Column>
                <Column field="updatedAt" header="Fecha Modificación"  sortable ></Column>
            </DataTable>

        {selectedRecord ? (
            <InscriptionDetail env={env} ecommerce={ecommerce} recordId={selectedRecord.id} record={selectedRecord} />
        ) : (
            <></>
        )}
        </>
    );
}
