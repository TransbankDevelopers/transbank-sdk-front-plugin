import { Dropdown } from "primereact/dropdown";
import { ENVIROMENT_LIST, INSCRIPTIONS_STATUS, PRODUCT_LIST, SERVICE_LIST, 
    TRANSACTION_STATUS_LIST, TRANSACTION_TBK_REFUND_LIST, TRANSACTION_TBK_STATUS_LIST } from "./TbkConstans";

export const createFilerDropdown = (list) => {
    return (options) => {
        return (
            <Dropdown value={options.value} options={list} 
                onChange={(e) => options.filterApplyCallback(e.value)} 
                placeholder="Seleccionar"  showClear style={{ minWidth: '8rem' }} />
        );
    };
}

export const environmentFilterTemplate = createFilerDropdown(ENVIROMENT_LIST);
export const transactionTbkStatusFilterTemplate = createFilerDropdown(TRANSACTION_TBK_STATUS_LIST);
export const transactionTbkRefundFilterTemplate = createFilerDropdown(TRANSACTION_TBK_REFUND_LIST);
export const transactionStatusFilterTemplate = createFilerDropdown(TRANSACTION_STATUS_LIST);
export const productFilterTemplate = createFilerDropdown(PRODUCT_LIST);
export const serviceFilterTemplate = createFilerDropdown(SERVICE_LIST);
export const inscriptionStatusFilterTemplate = createFilerDropdown(INSCRIPTIONS_STATUS);
