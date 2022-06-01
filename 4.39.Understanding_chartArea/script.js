// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
        borderWidth: 1
    }]
};

// chartAreaBorder plugin block
const chartAreaBorder = {
    id: "chartAreaBorder",
    beforeDraw(chart, args, options) {
        const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
        //console.log(top);
        //console.log(bottom);
        ctx.strokeStyle = "black";
        ctx.strokeRect(right - 1, top, 0, height);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(left, top, width - 1, 0);
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
            title: {
                display: true,
                text: 'Understanding chartArea'
            }
        }
    },
    plugins: [chartAreaBorder]
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);