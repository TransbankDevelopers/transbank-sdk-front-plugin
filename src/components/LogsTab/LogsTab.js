import React, {useState, useEffect} from 'react';
import LogGrid from "./LogGrid";
import { Card } from 'primereact/card';

export default function LogsTab({env, ecommerce}) {

    return (
        <Card>
            <LogGrid  env={env} ecommerce={ecommerce} />
        </Card>
    );
}

