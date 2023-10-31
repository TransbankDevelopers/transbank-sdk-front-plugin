import React from 'react';
import ExecutionErrorLogGrid from "./ExecutionErrorLogGrid";
import { Card } from 'primereact/card';

export default function ExecutionErrorLogTab({env, ecommerce}) {

    return (
        <Card>
            <ExecutionErrorLogGrid  env={env} ecommerce={ecommerce} />
        </Card>
    );
}

