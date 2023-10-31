import React from 'react';
import DiagnosticoGrid from "./DiagnosticoGrid";
import { Card } from 'primereact/card';
import PluginCheck from './PluginCheck';

export default function DiagnosticoTab({env, ecommerce}) {

    return (
        <Card>
            <PluginCheck env={env} ecommerce={ecommerce} />
            <br></br>
            <DiagnosticoGrid env={env} ecommerce={ecommerce} />
        </Card>
    );
}

