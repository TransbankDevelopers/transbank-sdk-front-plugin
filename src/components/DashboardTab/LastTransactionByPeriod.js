import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { SelectButton } from 'primereact/selectbutton';
import { Card } from 'primereact/card';
import { TbkService } from '../../service/TbkService';
import { ProgressSpinner } from 'primereact/progressspinner';
import Constants from '../../util/Constants';


const getOptionChart = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
    return options;
};

export default function LastTransactionByPeriod({env, ecommerce}) {
    const tbkService = new TbkService(env, ecommerce);
    const [period, setPeriod] = useState(1);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const PERIODS = ['dias', 'semananas', 'meses']
    const items = [
        { name: 'Dias', value: 1 },
        { name: 'Semananas', value: 2 },
        { name: 'Meses', value: 3 }
    ];
    const [chartData, setChartData] = useState({});
    const [chartOptions] = useState(getOptionChart());
    useEffect(() => {
        loadData();
     }, [period]);

    const loadData = async() => {
        setLoading(true);
        let resp = await tbkService.lastTransactionsByPeriod({ period : period});
        setData(resp);
        if (resp.data && resp.data.length > 0){
            loadChart(processData(period, resp));
        }
        setLoading(false); 
    }

    const processData = (period, resp) => {
        let result = {
            webpayPlus : [],
            webpayPlusMall : [],
            webpayOneclick : [],
            labels: []
        };

        for (const item of resp.data){
            result.webpayPlus.push(item['webpay_plus']);
            result.webpayPlusMall.push(item['webpay_plus_mall']);
            result.webpayOneclick.push(item['webpay_oneclick']);
            result.labels.push(item['period']);
        }
        if (period === 3){
            let newLabels = [];
            for (const label of result.labels){
                let month = label.substr(label.length - 2);
                let newLAbel = Constants.MONTHS_OF_YEAR[parseInt(month)];
                newLabels.push(newLAbel);
            }
            result.labels = newLabels;
        }
        return result;
    }

    const loadChart = (data) => {
        const documentStyle = getComputedStyle(document.documentElement);
        const chartData = {
            labels: data.labels,
            datasets: [
                {
                    type: 'bar',
                    label: 'Webpay Plus',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: data.webpayPlus
                },
                {
                    type: 'bar',
                    label: 'Webpay Plus Mall',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: data.webpayPlusMall
                },
                {
                    type: 'bar',
                    label: 'Oneclick',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: data.webpayOneclick
                }
            ]
        };
        setChartData(chartData);
    };

    const changePeriod =  (value) => {
        setPeriod(value);
    };

    const getTitle = (data) => {
        if (!data?.active){
            return "No hay productos activos"
        }
        if (data?.data != null && data?.data.length > 0){
            let environment = data.production ? 'Producción' : 'Test';
            return `Transacciones últim${period === 2 ? 'a' : 'o'}s ${data.length} ${PERIODS[period - 1]} en ${environment}`;
        }
        return "No hay transacciones";
    };

    const header = (
        <div className="flex align-items-center gap-2">
            <div className="flex-1 justify-content-center">
                <h3>{getTitle(data)}</h3>
            </div>
            <div className="flex-2 align-items-center justify-content-end gap-2">
                <SelectButton value={period} onChange={(e) => changePeriod(e.value)} optionLabel="name" options={items} />
            </div>
        </div>
    );

    return (
        <>
        {loading ? <ProgressSpinner />
            : (
            <Card header={header} className="h-full" >
                <div className="flex justify-content-center">
                    
                    {!(data?.active && data.data && data.data.length > 0) || <Chart type="bar" data={chartData} options={chartOptions} />}
                </div>
            </Card>
        )}
        </>
    )
}
        