// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Tempreture in C°',
        data: [
            [8, 12],
            [9, 16],
            [6, 9],
            [4, 10],
            [3, 12],
            [9, 2]
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        borderSkipped: false
    }]
};

// config block
const config = {
    type: 'bar',
    data: data,
    options: {
        indexAxis: "y",
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Smooth line chart'
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);