import React from 'react';
import InscriptionGrid from "./InscriptionGrid";
import { Card } from 'primereact/card';

export default function InscriptionTab({env, ecommerce}) {

    return (
        <Card>
            <InscriptionGrid  env={env} ecommerce={ecommerce} />
        </Card>
    );
}

