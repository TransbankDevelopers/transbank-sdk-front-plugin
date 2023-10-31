import React from 'react';
import { TbkService } from '../../service/TbkService';
import ProductMallConfigForm from '../ProductMallConfigForm/ProductMallConfigForm';

export default function  WebpayplusMallConfigForm({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    return (
        <ProductMallConfigForm env={env} ecommerce={ecommerce} 
            getConfig={async(param) => tbkService.getWebpayplusMallConfig(param)} 
            resetConfig={async(param) => tbkService.resetWebpayplusMallConfig(param)} 
            saveConfig={async(param) => tbkService.saveWebpayplusMallConfig(param)} 
        />
    );
}
