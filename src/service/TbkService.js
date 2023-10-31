import { DataTest } from '../data/DataTest';
import { getApiUrl } from '../util/UrlUtil';

export class TbkService {
    
    constructor(env, ecommerce) {
        this.env = env;
        this.ecommerce = ecommerce;
    }

    isProduction(){
        return this.env === 'production';
    }

    async post(action, params){
        params['method'] = action;

        if (!this.isProduction()){
            return this.getTestData(DataTest[action](params));
        }
        let resp = await fetch(`${getApiUrl(this.ecommerce, 'execute')}`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(params)
        });
        console.log('resp', resp);
        let contentType = resp.headers.get('content-type');
        let isJson = contentType.indexOf('application/json') !== -1;
        if (isJson){
            let respJson = await resp.json();
            console.log('respJson', respJson);
            if (resp.ok){
                return respJson;
            }
            throw new Error(respJson['message'] || 'Ocurrió un error');
        }
        console.error(resp);
        throw new Error('Ocurrió un error');
    }

    processPaginatedListRequest(params){
        let newParams = {
            pageSize : params.rows,
            firstRow : params.first,
            sortField : params.sortField,
            sortOrder : params.sortOrder,
        }; 
        if (params.filters){
            let newFilters = [];
            for (const property in params.filters) {
                let item = params.filters[property];
                let value = item.value;
                if (value && value.trim() !== ''){
                    newFilters.push({
                        field: property,
                        value: value,
                        mode: item.matchMode
                    });
                }
            }
            newParams.filters = newFilters;
        }
        return newParams;
    }

    getEcommerceConfig(params) {
        return this.post('getEcommerceConfig', params);
    }

    async getListTransaction(params){
        params = this.processPaginatedListRequest(params);
        return this.post('getListTransaction', params);
    }

    async getListInscription(params){
        params = this.processPaginatedListRequest(params);
        return this.post('getListInscription', params);
    }

    async getListApiServiceLog(params){
        params = this.processPaginatedListRequest(params);
        return this.post('getListApiServiceLog', params);
    }

    async getListExecutionErrorLog(params){
        params = this.processPaginatedListRequest(params);
        return this.post('getListExecutionErrorLog', params);
    }

    async getLogInfo(params){
        return this.post('getLogInfo', params);
    }

    async getLogDetail(params){
        return this.post('getLogDetail', params);
    }

    async getWebpayplusConfig(params){
        return this.post('getWebpayplusConfig', params);
    }

    async saveWebpayplusConfig(params){
        return this.post('saveWebpayplusConfig', params);
    }

    async resetWebpayplusConfig(params){
        return this.post('resetWebpayplusConfig', {});
    }

    async getWebpayplusMallConfig(params){
        return this.post('getWebpayplusMallConfig', params);
    }

    async saveWebpayplusMallConfig(params){
        return this.post('saveWebpayplusMallConfig', params);
    }

    async resetWebpayplusMallConfig(params){
        return this.post('resetWebpayplusMallConfig', {});
    }

    async getOneclickConfig(params){
        return this.post('getOneclickConfig', params);
    }

    async saveOneclickConfig(params){
        return this.post('saveOneclickConfig', params);
    }
    
    async resetOneclickConfig(params){
        return this.post('resetOneclickConfig', {});
    }

    async getDiagnosticoInfo(params){
        return this.post('getDiagnosticoInfo', params);
    }

    async getPhpInfo(params){
        return this.post('getPhpInfo', params);
    }

    async executeTbkStatus(params){
        return this.post('executeTbkStatus', params);
    }

    async executeTbkRefund(params){
        return this.post('executeTbkRefund', params);
    }

    async checkPlugin(){
        return this.post('checkPlugin', {});
    }

    async createTables(){
        return this.post('createTables', {});
    }

    async getContact(params){
        return this.post('getContact', params);
    }

    async saveContact(params){
        return this.post('saveContact', params);
    }

    async lastTransactionsOk(params){
        return this.post('lastTransactionsOk', params);
    }

    async lastTransactionsByPeriod(params){
        return this.post('lastTransactionsByPeriod', params);
    }

    async pluginStatusSummary(params){
        return this.post('pluginStatusSummary', params);
    }

    getTestData(data){
        return new Promise(
            resolve => setTimeout(() => {
                resolve(data);
            }, Math.random() * 1000)
        );
    }
}
