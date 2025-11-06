import { Line } from "react-chartjs-2";

function LineInvestment({ investmentData }) {
    const data = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
            {
                label: "Youtube",
                data: investmentData.data,
                backgroundColor: "rgba(22, 82, 240,0.15)",
                borderColor: "#1652F0",
                pointRadius: 0,
                // lineTension: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
         tooltips: {
             enabled: false,
         },
         legend: {
             display: false,
             labels: {
                 usePointStyle: false,

             },


         },
         scales: {
             xAxes: [{
                 display: true,
                 gridLines: {
                     display: false,
                     drawBorder: false
                 },
                 scaleLabel: {
                     display: false,
                     labelString: 'Month'
                 }
             }],
             yAxes: [{
                 display: true,
                 gridLines: {
                     display: false,
                     drawBorder: false
                 },
                 scaleLabel: {
                     display: false,
                     labelString: 'Value'
                 }
             }]
         },
    };
    return (
        <>
            <Line data={data} height={150} options={options} id="transaction-graph" />
        </>
    );
}
export default LineInvestment;
