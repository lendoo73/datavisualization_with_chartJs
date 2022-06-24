// https://github.com/chartjs/chartjs-adapter-date-fns
// data block
//console.log(new Date("2022-06-01"));
//console.log(new Date("2022-06-01").setHours(0, 0, 0, 0));
const data = {
    labels: [
        new Date("2022-06-01").setHours(0, 0, 0, 0), 
        new Date("2022-06-02").setHours(0, 0, 0, 0), 
        new Date("2022-06-03").setHours(0, 0, 0, 0),
        new Date("2022-06-04").setHours(0, 0, 0, 0),
        new Date("2022-06-05").setHours(0, 0, 0, 0),
        new Date("2022-06-06").setHours(0, 0, 0, 0)
    ],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        hitRadius: 0, // remove trigger effect
        pointRadius: 0
    }]
};

// config block
const config = {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                left: 12
            }
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day"
                }
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                enabled: false
            },
            title: {
                display: true,
                text: 'Crosshair in Chart'
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const crosshair = (chart, mousemove) => {
    // www.chartjs.org/docs/latest/developers/api.html#update-mode
    chart.update("none");
//    console.log(mousemove);
    const xCoor = mousemove.offsetX;
    const yCoor = mousemove.offsetY;
//    console.log(xCoor);
//    console.log(yCoor);
    
    const { ctx, data, chartArea: {top, bottom, left, right, width, height}, scales: {x, y} } = chart;
    
    ctx.save();
    
    if (xCoor >= left && xCoor <= right && yCoor >= top && yCoor <= bottom) {

        const lines = (xStart, yStart, XEnd, yEnd) => {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(102, 102, 102, 1)";
            ctx.lineWidth = 2;
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(XEnd, yEnd);
            ctx.setLineDash([6, 6]);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
            ctx.setLineDash([]);
        };
        
        lines(left, yCoor, right, yCoor);
        lines(xCoor, top, xCoor, bottom);
        
        ctx.beginPath();
        const LABEL_HEIGHT = 24;
        ctx.fillStyle = "rgba(102, 102, 102, 1)";
        ctx.fillRect(0, yCoor - (LABEL_HEIGHT / 2), left, LABEL_HEIGHT);
        ctx.restore();
        
        const labelText = y.getValueForPixel(yCoor);
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        ctx.fillText(labelText.toFixed(2), left / 2, yCoor);
        ctx.restore();
        
        // bottom rect
        const bottomLabel = new Date(x.getValueForPixel(xCoor)).toLocaleString("en-US", {
            day: "numeric",
            month: "long"
        });
        const bottomLabelWidth = ctx.measureText(bottomLabel).width + 12;
//        console.log(bottomLabelWidth);
        ctx.beginPath();
//        const LABEL_HEIGHT = 24;
        ctx.fillStyle = "rgba(102, 102, 102, 1)";
        ctx.fillRect(xCoor - (bottomLabelWidth / 2), bottom, bottomLabelWidth, LABEL_HEIGHT);
        ctx.restore();
        
//        console.log(data.labels);
        
        // bottom text
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        ctx.fillText(bottomLabel, xCoor, bottom + LABEL_HEIGHT / 2);
        ctx.restore();
    }
    
};

myChart.canvas.addEventListener("mousemove", e => {
    crosshair(myChart, e);
});
