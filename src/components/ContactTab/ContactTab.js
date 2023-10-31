import React from 'react';
import ContactForm from './ContactForm';
import { Divider } from 'primereact/divider';
import { Image } from 'primereact/image';

export default function  ContactTab({env, ecommerce, img}) {
    return (
        <div className="flex flex-column md:flex-row">
            <div className="md:w-5">
                <div>
                    <Image src={`${img}/tbk_black.svg`} alt="Image" width="250" />
                </div>
                <br></br>
                <p className="m-0">
                    Ayudanos a seguir mejorando!!!, completa tus datos.
                </p>
            </div>
            <div className="md:w-2">
                <Divider layout="vertical">
                </Divider>
            </div>
            <div className="md:w-5">
                <ContactForm  env={env} ecommerce={ecommerce} />
            </div>
        </div>
    );
}
