import React from 'react';
import { Divider } from 'primereact/divider';
import WebpayplusMallConfigForm from "./WebpayplusMallConfigForm";
import { Image } from 'primereact/image';

export default function  WebpayplusMallConfigTab({env, ecommerce, img}) {

    return (
        <div className="flex flex-column md:flex-row">
            <div className="md:w-5">
                <div>
                    <Image src={`${img}/wpplus.png`} alt="Image" width="250" />
                </div>
                <br></br>
                <p className="m-0">
                    Webpay es la pasarela de pago de Transbank para realizar transacciones desde Internet con tarjetas bancarias de crédito y débito Redcompra de manera eficaz y segura.
                    Este plugin funciona en modalidad Webpay Plus Mall, significa que tienes un código de comercio mall, un código de comercio y un apikey.
                </p>
            </div>
            <div className="md:w-2">
                <Divider layout="vertical">
                </Divider>
            </div>
            <div className="md:w-5">
                <WebpayplusMallConfigForm  env={env} ecommerce={ecommerce} />
            </div>
        </div>
    );
}
