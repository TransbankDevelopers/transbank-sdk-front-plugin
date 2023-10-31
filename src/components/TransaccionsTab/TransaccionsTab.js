import React from 'react';
import TransaccionsGrid from "./TransaccionsGrid";
import { Card } from 'primereact/card';

export default function TransaccionsTab({env, ecommerce}) {

    return (
        <Card>
            <TransaccionsGrid  env={env} ecommerce={ecommerce} />
        </Card>
    );
}

