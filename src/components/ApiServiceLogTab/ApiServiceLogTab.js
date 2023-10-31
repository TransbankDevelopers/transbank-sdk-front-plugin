import React from 'react';
import { Card } from 'primereact/card';
import ApiServiceLogGrid from './ApiServiceLogGrid';

export default function ApiServiceLogTab({env, ecommerce}) {

    return (
        <Card>
            <ApiServiceLogGrid  env={env} ecommerce={ecommerce} />
        </Card>
    );
}

