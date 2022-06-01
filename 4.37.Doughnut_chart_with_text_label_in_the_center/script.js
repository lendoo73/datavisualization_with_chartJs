// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [25, 25, 25, 25],
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
        borderWidth: 1,
        cutout: "90%"
    }]
};

// doughnutLabel block
const doughnutLabel = {
    id: "doughnutLabel",
    beforeDraw(chart, args, options) {
        const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
        ctx.save();
//        console.log(top);
//        ctx.fillRect(width / 2, height / 2 + top - 5, 250, 10);
//        ctx.restore(); 
        
        
        ctx.font = `${options.fontSize}px Aria`;
        ctx.fillStyle = options.fontColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${chart.data.datasets[0].data[0]}%`, width / 2, height / 2 + top + options.fontSize / 20);
        //console.log(chart.data.datasets[0].data[0]);
        ctx.restore();
    }
};

// config block
const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                display:false
            },
            doughnutLabel: {
                fontSize: 100,
                fontColor: "blue    "
            }
        },
        title: {
            display: true,
            text: 'Doughnut chart with text label in the center'
        }
    },
    plugins:  [doughnutLabel]
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);