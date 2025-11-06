import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ doughnutData }) {
    const data = {
        datasets: [
            {
                data: doughnutData.data,
                backgroundColor: [
                    "rgba(22, 82, 240,1)",
                    "rgba(22, 82, 240,0.5)",
                    "rgba(22, 82, 240,0.15)",
                ],
            },
        ],
        labels: ["Facebook", "Youtube", "Google"],
    };

    const options = {
        responsive: true,
        cutoutPercentage: 80,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                usePointStyle: true,
                // fontFamily: "Segoe UI",
                fontSize: 12,
                fontColor: "#464a53",
                padding: 20,
            },
        },
    };
    return (
        <>
            <Doughnut
                data={data}
                height={150}
                options={options}
                id="most-selling-items"
            />
        </>
    );
}
export default DoughnutChart;
