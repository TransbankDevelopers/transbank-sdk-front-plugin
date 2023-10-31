import React, { useState, useEffect } from 'react';
import { TbkService } from '../../service/TbkService';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { saveAs } from 'file-saver';
import { Toolbar } from 'primereact/toolbar';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function LogDetail({env, ecommerce, filename}) {
    const tbkService = new TbkService(env, ecommerce);
    const [loading, setLoading] = useState(true);
    const [loadRecord, setLoadRecord] = useState({});
    const [originalText, setOriginalText] = useState('');
    const [text, setText] = useState('');
    useEffect(() => {
        loadData(filename);
    }, [filename]);

    const loadData = async(filename) => {
        setLoading(true);
        setText('');
        setLoadRecord({});
        let resp = await tbkService.getLogDetail({ filename });
        setOriginalText(resp.content);
        let text = resp.content.replace(/#@#/g, '<br/>');
        let pattern = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/g;
        text = text.replace(pattern, function(match) {
            return '<b>' + match + '</b>';
        });
        setText(text);
        setLoadRecord(resp);
        setLoading(false);
    }

    const exportTxt = () => {
        let temp = originalText.replace(/#@#/g, '\n');
        let blob = new Blob([temp], {
          type: "text/plain;charset=utf-8"
        });
        saveAs(blob, filename);
    };

    const refresh = () => {
        loadData(filename);
    };

    const endContent = (
        <React.Fragment>
            <Button icon="pi pi-refresh" className="mr-2"  onClick={refresh} data-pr-tooltip="Refrescar" />
            <Button icon="pi pi-download" className="mr-2" onClick={exportTxt} data-pr-tooltip="Exportar" />
        </React.Fragment>
    );

    const header = (
        <Toolbar end={endContent} />
    );

    return (
        <>
            {loading ? (
                    <div className="flex justify-content-center">
                        <ProgressSpinner />
                    </div>
                ) : (
            <div className="p-2 border-1 border-300 border-round">
                <div className="grid">
                    <div className="col-6">
                        <div>
                            <b>Archivo:</b> { loadRecord.filename } 
                        </div>
                        <div>
                            <b>Lineas:</b>  { loadRecord.lines }    <b>Tamaño:</b> { loadRecord.size }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="flex align-items-center justify-content-end gap-2">
                            <Button icon="pi pi-refresh" className="mr-2"  onClick={refresh} data-pr-tooltip="Refrescar" />
                            <Button icon="pi pi-download" className="mr-2" onClick={exportTxt} data-pr-tooltip="Exportar" />
                        </div>
                    </div>
                </div>
                <Editor value={ text } showHeader={false} readOnly style={{ height: '320px' }} />
            </div>
            )}
        </>
    );
}
