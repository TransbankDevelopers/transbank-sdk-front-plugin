import React from 'react';
import { TbkService } from '../../service/TbkService';
import ProductMallConfigForm from '../ProductMallConfigForm/ProductMallConfigForm';

export default function  OneclickConfigForm({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    return (
        <ProductMallConfigForm env={env} ecommerce={ecommerce} 
            getConfig={async(param) => tbkService.getOneclickConfig(param)} 
            resetConfig={async(param) => tbkService.resetOneclickConfig(param)} 
            saveConfig={async(param) => tbkService.saveOneclickConfig(param)} 
        />
    );
}
