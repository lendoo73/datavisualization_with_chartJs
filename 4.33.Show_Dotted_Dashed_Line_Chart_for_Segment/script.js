// data block
const color = "Yellow";
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const dash = (ctx, value) => ctx.p0DataIndex < labels.indexOf(color) ? value : [6, 0];

const data = {
    labels,
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
        tension: 0.4,
        segment: {
            //borderDash: [6, 6]
            borderDash: ctx => dash(ctx, [6, 6]) || [6, 0]
        }
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
                text: 'Show Dotted Dashed Line Chart for Segment'
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);