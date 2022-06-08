// https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html#installation

const barColorCode = () => {
    return ctx => {
        //console.log(ctx.chart.config.data.datasets[0].data.length);
        //console.log(ctx.parsed._custom.start);
        //console.log(ctx.parsed._custom.end);
        const start = ctx.parsed._custom.start;
        const end = ctx.parsed._custom.end;
        let barColor = start <= end
            ? "rgba(75, 192, 192, 1)"
            : start > end 
            ? "rgba(255, 99, 132, 1)"
            : "black";
        
        if (ctx.dataIndex === 0 || ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1) {
            barColor = "rgba(0, 0, 0, 1";
        }
        
        return barColor;
        
    };
};

const barBackGroundColorCode = () => {
    return ctx => {
        //console.log(ctx.parsed._custom.start);
        //console.log(ctx.parsed._custom.end);
        const start = ctx.parsed._custom.start;
        const end = ctx.parsed._custom.end;
        let barColor = start <= end
            ? "rgba(75, 192, 192, 0.2)"
            : start > end 
            ? "rgba(255, 99, 132, 0.2)"
            : "black";
        
        if (ctx.dataIndex === 0 || ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1) {
            barColor = "rgba(0, 0, 0, 0.2";
        }
        
        return barColor;
        
    };
};


// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', "black", "black"],
    datasets: [{
        label: '# of Votes',
        //data: [12, 19, 3, 5, 2, 3],
        data: [
            [12, 19],
            [19, 3],
            [3, 5],
            [5, 2],
            [2, 3],
            [3, 9],
            [9, 15],
            [15, 10]
        ],
        backgroundColor: barBackGroundColorCode(),
        borderColor: barColorCode(),
        borderWidth: 1,
        borderSkipped: false
    }]
};

// waterfallLines plugin
const waterfallLines = {
    id: "waterfallLines",
    beforeDraw(chart, args, options) {
        const {ctx, config, scales: {x, y} } = chart;
        //console.log(config._config.data.datasets[0].data[1][0]);
        //console.log(config._config.data.datasets[0].data[1][1]);
        
        ctx.save();
        ctx.strokeStyle = options.lineColor;
        ctx.setLineDash([options.lineStyle1, options.lineStyle2]);
        
        for (let i = 0; i < config._config.data.datasets[0].data.length - 1; i++) {
            ctx.strokeRect(
                x.getPixelForValue(i),
                y.getPixelForValue(config._config.data.datasets[0].data[i][1]), 
                x.getPixelForValue(0.5), 
                0
            );
        }
        
        
    }
}


// config block
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            datalabels: {
                formatter: value => {
                    console.log(value);
                    const votes = value[1] - value[0];
                    const netVotes = Math.abs(votes);
                    return `Votes: ${netVotes}`;
                }
            },
            waterfallLines: {
                lineColor: "black",
                lineStyle1: 5, 
                lineStyle2: 5
            },
            title: {
                display: true,
                text: 'Waterfall chart'
            },
            tooltip: {
                enabled: false
            }    
        }
    },
    plugins: [waterfallLines, ChartDataLabels]
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);