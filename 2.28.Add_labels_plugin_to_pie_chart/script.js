// data block
const data = {
    labels: ['Red1', 'Red2', 'Red3', 'Green'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 15, 5],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
        offset: [20, 20, 20, 0]
    }]
};

// config block
const config = {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            labels: {
                position: "outside",
                textMargin: 10,
                render: (args) => {
                    console.log(args);
                    return `${args.label}: ${args.percentage}%`;
                }
            },
            title: {
                display: true,
                text: 'Add labels plugin to pie chart'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 20,
                top: 30,
                bottom: 30
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);