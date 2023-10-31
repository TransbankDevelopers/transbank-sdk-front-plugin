import React, { useState, useEffect } from 'react';
import { TbkService } from '../../service/TbkService';
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function PhpInfoTab({env, ecommerce, filename}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(true);
    const [html, setHtml] = useState('');
    useEffect(() => {
        loadData(filename);
    }, [filename]);

    const loadData = async(filename) => {
        setLoading(true);
        setHtml('');
        let resp = await tbkService.getPhpInfo({ filename });
        setHtml(resp.string.content);
        setLoading(false);
    }

    return (
        <Card>
            {loading ? (
                <div className="flex justify-content-center">
                    <ProgressSpinner />
                </div>
            ) : (
                <div className="content" dangerouslySetInnerHTML={{__html: html}}></div>
            )}
        </Card>
    );
}

            
        