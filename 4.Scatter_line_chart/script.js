// data block
const data = {
    datasets: [{
        label: '# of Votes',
        data: [
            {x: 3, y: 12},
            {x: 6, y: 19},
            {x: 4.5, y: 3},
            {x: 1.5, y: 5},
            {x: 3.5, y: 2},
            {x: 3, y: 3}
        ],
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        showLine: true,
        tension: 0.4
    }]
};

// config block
const config = {
    type: 'scatter',
    data: data,
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Scatter line chart',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);