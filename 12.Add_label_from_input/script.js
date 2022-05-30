const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const dataPoints = [12, 19, 3, 5, 2, 3];

// data block
const data = {
    labels: labels,
    datasets: [{
        label: '# of Votes',
        data: dataPoints,
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
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Add label from input',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// module scope!!!
const addValue = () => {
    const valueId = document.getElementById("valueId");
    dataPoints.push(parseInt(valueId.value));
    
    const labelId = document.getElementById("labelId");
    labels.push(labelId.value);
    
    myChart.config.data.datasets[0].data = dataPoints;
    myChart.config.data.labels = labels;
    myChart.update();
}

// add to the global scope:
window.addValue = addValue;