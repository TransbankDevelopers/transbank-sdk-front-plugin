import { Card } from 'primereact/card';
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function LastTransactionOK({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const loadData = async() => {
        setLoading(true);
        let resp = await tbkService.lastTransactionsOk({ });
        setData(resp);
        loadChart(resp);
        setLoading(false); 
    }

    const loadChart = (data) => {
        const documentStyle = getComputedStyle(document.documentElement);
        const dataConfig = {
            labels: ['Ok', 'Fail'],
            datasets: [
                {
                    data: [data.ok, (data.total - data.ok)],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-600'), 
                        documentStyle.getPropertyValue('--red-600')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--green-400'), 
                        documentStyle.getPropertyValue('--red-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(dataConfig);
        setChartOptions(options);
    };

    const getTitle = (data) => {
        if (!data?.active){
            return "No hay productos activos"
        }
        if (data?.total > 0){
            let environment = data.production ? 'Producción' : 'Test';
            return `Últimas ${data.total} transacciones en ${environment}`;
        }
        return "No hay transacciones";
    };

    useEffect(() => {
        loadData();
    }, []);

    const header = (
        <div className="flex justify-content-center">
            <h3>
                {getTitle(data)}
            </h3>
        </div>
    );

    return (
        <>
        {loading ? <ProgressSpinner />
            : (
            <Card header={header} className="h-full" >
                <div className="flex justify-content-center">
                    {!(data?.active && data?.total > 0) || <Chart type="pie" data={chartData} options={chartOptions} />}
                </div>
            </Card>
        )}
        </>
    )
}
