// www.chartjs.org/docs/latest/charts/bar.html#barpercentage-vs-categorypercentage

// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Red Bar',
        data: [
            [0, 12],
            [0, 19],
            [0, 3],
            [0, 5],
            [0, 2],
            [0, 3]
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    },
    {
        label: 'Arrow Bar',
        data: [
            [12, 19],
            [19, 3],
            [3, 5],
            [5, 2],
            [2, 3],
            //[0, 3]
        ],
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        barPercentage: 0.05
    }]
};

// barGrowthIndicator plugin
const barGrowthIndicator = {
    id: "barGrowthIndicator",
    afterDatasetsDraw(chart, scales, options) {
        const {ctx, scales: {x, y}} = chart;
        
        const deltaPerctentage = [];
        
        for (let i = 0; i < chart._metasets[0]._parsed.length -1; i++) {
            //console.log(chart._metasets[0]._parsed[0].y);
            let z = 1 + i;
            const basis = chart._metasets[0]._parsed[i].y;
            const delta = chart._metasets[0]._parsed[z].y;
            let percentage = delta / basis * 100;
            percentage -= 100;
            //console.log(percentage);
            deltaPerctentage.push(percentage.toFixed(1));
        }
        // https://www.chartjs.org/docs/latest/developers/api.html#getdatasetmeta-index
        //console.log(chart.getDatasetMeta(1).data[0].x);
        ctx.fillStyle = "black";
//        ctx.fillRect(
//            chart.getDatasetMeta(1).data[0].x,
//            chart.getDatasetMeta(1).data[0].y,
//            10,
//            10
//        );
        
        console.log(chart._metasets[1].hidden);
        if (chart._metasets[1].hidden !== true) {
            for (let a = 0; a < deltaPerctentage.length; a++) {
                const start = chart._metasets[1]._parsed[a]._custom.start;
                const end = chart._metasets[1]._parsed[a]._custom.end;
                if (end >= start) {
                    //console.log("positive number");
                    // triangle
                    ctx.beginPath();
                    ctx.moveTo(chart.getDatasetMeta(1).data[a].x, chart.getDatasetMeta(1).data[a].y - 2);
                    ctx.lineTo(chart.getDatasetMeta(1).data[a].x - 5, chart.getDatasetMeta(1).data[a].y + 5);
                    ctx.lineTo(chart.getDatasetMeta(1).data[a].x + 5, chart.getDatasetMeta(1).data[a].y + 5);
                    ctx.fillStyle = "black";
                    ctx.fill();
                    ctx.restore();

                    ctx.font = "10px Arial";
                    ctx.fillStyle = "green";
                    ctx.textAlign = "center";
                    ctx.fillText(deltaPerctentage[a] + "%", chart.getDatasetMeta(1).data[a].x + 2.5, chart.getDatasetMeta(1).data[a].y - 10);
                    ctx.restore();
                }
                if (end < start) {
                    //console.log("negative number");
                    // triangle
                    let yStart = a + 1;
                    ctx.beginPath();
                    ctx.moveTo(chart.getDatasetMeta(1).data[a].x, chart.getDatasetMeta(0).data[yStart].y + 3);
                    ctx.lineTo(chart.getDatasetMeta(1).data[a].x - 5, chart.getDatasetMeta(0).data[yStart].y - 5);
                    ctx.lineTo(chart.getDatasetMeta(1).data[a].x + 5, chart.getDatasetMeta(0).data[yStart].y - 5);
                    ctx.fillStyle = "black";
                    ctx.fill();
                    ctx.restore();

                    ctx.font = "10px Arial";
                    ctx.fillStyle = "red";
                    ctx.textAlign = "center";
                    ctx.fillText(deltaPerctentage[a] + "%", chart.getDatasetMeta(1).data[a].x + 2.5, chart.getDatasetMeta(0).data[yStart].y + 12);
                    ctx.restore();

                }
            
            }
        
        }
    }
};

// config block
const config = {
    type: 'bar',
    data: data,
    options: {
        // www.chartjs.org/docs/latest/axes/cartesian/linear.html#linear-axis-specific-options
        scales: {
            y: {
                grace: "5%", // increase the maximum of y axis
                beginAtZero: true
            }
        },
        plugins: {
            // https://www.chartjs.org/docs/latest/configuration/tooltip.html#filter-callback
            // remove tooltip from Arrow Bar
            tooltip: {
                filter: (tooltipItem) => {
                    //console.log(tooltipItem);
                    return tooltipItem.datasetIndex === 0;
                } 
            },
            title: {
                display: true,
                text: 'Bar Growth Indicator Chart'
            }
        }
    },
    plugins: [barGrowthIndicator]
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);