import React from 'react';
import LastTransactionOK from './LastTransactionOK';
import LastTransactionByPeriod from './LastTransactionByPeriod';
import PluginStatusSummary from './PluginStatusSummary';

export default function  DashboardTab({env, ecommerce, img, setTabActive}) {

    return (
        <div className="flex">
            <div className="flex-1 text-center p-1 border-round">
                <PluginStatusSummary env={env} ecommerce={ecommerce} img={img} setTabActive={setTabActive} />
            </div>
            <div className="flex-1 text-center p-1 border-round">
                <LastTransactionOK env={env} ecommerce={ecommerce} />
            </div>
            <div className="flex-1 text-center p-1 border-round">
                <LastTransactionByPeriod env={env} ecommerce={ecommerce} />
            </div>
        </div>
    );
}
