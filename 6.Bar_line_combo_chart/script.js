// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Bar Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        type: "bar",
        order: 2
    },
    {
        label: 'Line Chart',
        data: [6, 7, 3, 2.5, 2, 3],
        backgroundColor: 'rgba(0, 159, 64, 0.2)',
        borderColor: 'rgba(0, 159, 64, 1)',
        tension: 0.4,
        type: "line",
        order: 1
    }]
};

// config block
const config = {
    data: data,
    options: {
        tension: 0.4,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                yAlign: "bottom"
            },
            title: {
                display: true,
                text: 'Bar line combo chart',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);