const color = "rgba(75, 192, 192, 1)";

// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [
            {x: 3, y: 3},
            {x: 6, y: 3},
            {x: 9, y: 4.5},
            {x: 12, y: 6},
            {x: 15, y: 6},
            {x: 9, y: 4.5},
            {x: 6, y: 3}
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: color,
        borderWidth: 1
    }]
};

// config block
const config = {
    type: 'scatter',
    data: data,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Total Sales",
                    color: color
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Total Sales Agents"
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Add title to the scales',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);