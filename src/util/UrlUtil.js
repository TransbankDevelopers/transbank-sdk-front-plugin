import { ECOMMERCE_PRESTASHOP, ECOMMERCE_WOOCOMERCE } from "./TbkConstans";

export const getApiUrlWoocommerce = (action) => {
    let url = window.location.href;
    let baseUrl = url.substring(0, url.indexOf('wp-admin'));
    return `${baseUrl}/?rest_route=/webpay/plugin/execute`;
}

export const getApiUrlPrestashop = (action) => {
    let url = window.location.href;
    let baseUrl = url.substring(0, url.indexOf('adminop'));
    let token = url.substring(url.indexOf('?_token='));
    return `${baseUrl}/adminop/index.php/modules/webpay/plugin/${action}${token}`;
}

export const getOrderUrlWoocommerce = (orderId) => {
    let url = window.location.href;
    let baseUrl = url.substring(0, url.indexOf('wp-admin'));
    return `${baseUrl}/wp-admin/post.php?post=${orderId}&action=edit`;
}

export const getOrderUrlPrestashop = (orderId) => {
    let url = window.location.href;
    let baseUrl = url.substring(0, url.indexOf('adminop'));
    let token = url.indexOf('?_token=') >=0 ? url.substring(url.indexOf('?_token=')) : '?_token=123';
    return `/adminop/index.php/sell/orders/${orderId}/view${token}`;
}

export const getApiUrl = (ecommerce, action) => {
    if (ecommerce ===  ECOMMERCE_WOOCOMERCE){
        return getApiUrlWoocommerce(action);
    }
    else if (ecommerce ===  ECOMMERCE_PRESTASHOP){
        return getApiUrlPrestashop(action);
    }
    return null;
}

export const getOrderUrl = (ecommerce, orderId) => {
    if (ecommerce ===  ECOMMERCE_WOOCOMERCE){
        return getOrderUrlWoocommerce(orderId);
    }
    else if (ecommerce ===  ECOMMERCE_PRESTASHOP){
        return getOrderUrlPrestashop(orderId);
    }
    return null;
}
