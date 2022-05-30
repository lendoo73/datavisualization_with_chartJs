// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4
    }]
};

// config block
const config = {
    type: 'line',
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
                text: 'Change line color with button',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const changeColor = () => {
    console.log(event.target.value);
    const color = event.target.value;
    myChart.config.data.datasets[0].backgroundColor = color;
    myChart.config.data.datasets[0].borderColor = color;
    myChart.update();
};

window.changeColor = changeColor;