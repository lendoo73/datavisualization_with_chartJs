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
        cutout: "90%",
        borderRadius: 5,
        hoverOffset: 10
    }]
};

// config block
const config = {
    type: 'doughnut',
    data: data,
    options: {
        layout: {
            padding: {
                bottom: 10
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Narrow rounded border doughnut chart',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);