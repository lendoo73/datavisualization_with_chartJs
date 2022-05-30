// datastructure block
const label = ['Red', 'Blue', 'Yellow'];
const datapoints = [
    [12, 19, 3, 5, 3, 30],
    [12, 19, 3, 5, 6, 15],
    [12, 19, 3, 5, 9, 9]
];
const bgc = [   
    'rgba(255, 99, 132, 0.2)',
    'rgba(0, 162, 0, 0.2)',
    'rgba(255, 206, 86, 0.2)'
];
const bc = [   
    'rgba(255, 99, 132, 1)',
    'rgba(0, 162, 0, 1)',
    'rgba(255, 206, 86, 1)'
];


const colorDatasets = label.map((color, index) => {
    let colorObject = {};
    colorObject.label = color;
    colorObject.data = datapoints[index];
    colorObject.backgroundColor = bgc[index];
    colorObject.borderColor = bc[index];
    
    return colorObject;
});

console.log(colorDatasets);

// data block
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        colorDatasets[2],
        colorDatasets[1],
        colorDatasets[0]
    ]
};

// config block
const config = {
    type: 'bar',
    data: data,
    options: {
        borderWidth: 1,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Segments of data structures',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);