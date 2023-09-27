import { Tag } from "primereact/tag";
import { INSCRIPTIONS_STATUS_SEVERITY, TRANSACTION_STATUS_SEVERITY, 
    TRANSACTION_TBK_REFUND_SEVERITY, TRANSACTION_TBK_STATUS_SEVERITY } from "./SeverityConstans";
import { Button } from "primereact/button";
import { getOrderUrl } from "./UrlUtil";

export const createTagBodyTemplate = (attribute, severityList) => {
    return (record) => {
        let value = record[attribute];
        let severity = severityList[value];
        if (severity){
            return <Tag value={value} severity={severity}></Tag>;
        }
        return value;
    };
};

export const transactionStatusBodyTemplate = createTagBodyTemplate('status', 
    TRANSACTION_STATUS_SEVERITY);
export const transactionTbkStatusBodyTemplate = createTagBodyTemplate('transbankStatus', 
    TRANSACTION_TBK_STATUS_SEVERITY);
export const transactionTbkRefundBodyTemplate = createTagBodyTemplate('lastRefundType', 
    TRANSACTION_TBK_REFUND_SEVERITY);
export const inscriptionStatusBodyTemplate = createTagBodyTemplate('status', 
    INSCRIPTIONS_STATUS_SEVERITY);

export const createOrderLinkBodyTemplate = (ecommerce, attribute) => {
    return (record) => {
        let value = record[attribute];
        let url = getOrderUrl(ecommerce, value); 
        if (value){
            return <Button label={value} onClick={
                ()=>{
                    window.location.href = url;
                }
            } link />;
        }
        return value;
    };
};
