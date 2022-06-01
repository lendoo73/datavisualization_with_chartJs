// www.chartjs.org/docs/latest/configuration/interactions.html#events

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

// config block
const config = {
    type: 'pie',
    data: data,
    options: {
        onHover: (event, chartElement) => {
            console.log(event.native.target);
            event.native.target.style.cursor = chartElement[0] 
                ? "pointer"
                : "default";
//            if (chartElement.length === 1) {
//                event.native.target.style.cursor = "pointer";
//            }
//            if (chartElement.length === 0) {
//                event.native.target.style.cursor = "default";
//            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Onhover effect on pie chart'
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);