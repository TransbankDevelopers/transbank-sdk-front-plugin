import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { DashboardTab } from '../DashboardTab';
import { WebpayplusConfigTab } from '../WebpayplusConfigTab';
import { OneclickConfigTab } from '../OneclickConfigTab';
import { WebpayplusMallConfigTab } from '../WebpayplusMallConfigTab';
import { TransaccionsTab } from '../TransaccionsTab';
import { InscriptionTab } from '../InscriptionTab';
import { DiagnosticoTab } from '../DiagnosticoTab';
import { LogsTab } from '../LogsTab';
import { ApiServiceLogTab } from '../ApiServiceLogTab';
import { ExecutionErrorLogTab } from '../ExecutionErrorLogTab';
import { PhpInfoTab } from '../PhpInfoTab';
import { ContactTab } from '../ContactTab';

export default function TabConfig({env, img, ecommerce}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel leftIcon="pi pi-chart-bar mr-2" header="Dashboard">
                    <DashboardTab env={env} ecommerce={ecommerce} img={img} setTabActive={setActiveIndex} />
                </TabPanel>
                <TabPanel leftIcon="pi pi-cog mr-2" header="Webpay Plus">
                    <WebpayplusConfigTab env={env} ecommerce={ecommerce} img={img} />
                </TabPanel>
                <TabPanel leftIcon="pi pi-cog mr-2" header="Webpay Plus Mall">
                    <WebpayplusMallConfigTab env={env} ecommerce={ecommerce} img={img} />
                </TabPanel>
                <TabPanel leftIcon="pi pi-cog mr-2" header="Oneclick">
                    <OneclickConfigTab env={env} ecommerce={ecommerce} img={img} />
                </TabPanel>
                <TabPanel leftIcon="pi pi-shopping-cart mr-2" header="Transacciones">
                    <TransaccionsTab env={env} ecommerce={ecommerce}/>
                </TabPanel>
                <TabPanel leftIcon="pi pi-users mr-2" header="Inscripciones">
                    <InscriptionTab env={env} ecommerce={ecommerce}/>
                </TabPanel>
                <TabPanel leftIcon="pi pi-list mr-2" header="Invocaciones Api Tbk">
                    <ApiServiceLogTab env={env} ecommerce={ecommerce}/>
                </TabPanel>
                <TabPanel leftIcon="pi pi-list mr-2" header="Errores de Ejecución">
                    <ExecutionErrorLogTab env={env} ecommerce={ecommerce}/>
                </TabPanel>
                <TabPanel leftIcon="pi pi-info-circle mr-2" header="Diagnóstico">
                    <DiagnosticoTab env={env} ecommerce={ecommerce}/>
                </TabPanel>
                <TabPanel leftIcon="pi pi-info-circle mr-2" header="Logs">
                    <LogsTab env={env} ecommerce={ecommerce}/>
                </TabPanel>
                <TabPanel leftIcon="pi pi-info-circle mr-2" header="PHP Info">
                    <PhpInfoTab env={env} ecommerce={ecommerce}/>
                </TabPanel>
                <TabPanel leftIcon="pi pi-user mr-2" header="Contacto">
                    <ContactTab env={env} ecommerce={ecommerce} img={img}/>
                </TabPanel>
            </TabView>
        </div>
    );  
}



