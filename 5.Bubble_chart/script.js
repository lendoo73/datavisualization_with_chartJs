// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Red Votes',
            data: [
                {x:10, y: 6, r: 5},
                {x:5, y: 7, r: 3},
                {x:1, y: 3, r: 5},
                {x:6, y: 5, r: 7},
                {x:12, y: 1, r: 10},
                {x:8, y: 3, r: 7}
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Blue Votes',
            data: [
                {x:3, y: 5, r: 6},
                {x:7, y: 2, r: 8},
                {x:2, y: 1, r: 9},
                {x:8, y: 8, r: 10},
                {x:9, y: 6, r: 12},
                {x:2, y: 5, r: 5}
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }
    ]
};

// config block
const config = {
    type: 'bubble',
    data: data,
    options: {
        tension: 0.4,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Bubble chart',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);