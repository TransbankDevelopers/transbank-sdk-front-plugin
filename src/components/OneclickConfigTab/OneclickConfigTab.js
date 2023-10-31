import React from 'react';
import { Divider } from 'primereact/divider';
import OneclickConfigForm from "./OneclickConfigForm";
import { Image } from 'primereact/image';

export default function  OneclickConfigTab({env, ecommerce, img}) {

    return (
        <div className="flex flex-column md:flex-row">
            <div className="md:w-5">
                <div>
                    <Image src={`${img}/oneclick.png`} alt="Image" width="250" />
                </div>
                <br></br>
                <p className="m-0">
                    Permite a tus usuarios inscribir su tarjeta en su cuenta dentro de tu sitio, para que puedan comprar con un solo click.
                    Este plugin funciona en modalidad Mall, significa que tienes un código de comercio mall, un código de comercio tienda y un apikey.
                    Cuando un usuario inscribe su tarjeta, la asocia al código de comercio Mall, pero cuando se realiza una transacción, se pagará al código de comercio “tienda” y no al “mall”.
                </p>
            </div>
            <div className="md:w-2">
                <Divider layout="vertical">
                </Divider>
            </div>
            <div className="md:w-5">
                <OneclickConfigForm env={env} ecommerce={ecommerce} />
            </div>
        </div>
    );
}