// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 300],
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

// config block
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                grid: {
                    color: (context) => {
                        console.log(context.index);
                        if (context.index === 3) {
                            return "rgba(75, 192, 192, 1)";
                        } else {
                            return "rgba(0, 0, 0, 0.1)";
                        }
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: (context) => {
                        console.log(context.index);
                        if (context.index === 5) {
                            return "rgba(75, 192, 192, 1)";
                        } else {
                            return "rgba(0, 0, 0, 0.1)";
                        }
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Change color of a single gridline'
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);