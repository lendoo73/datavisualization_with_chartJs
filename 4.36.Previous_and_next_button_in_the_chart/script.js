const week = [];
const weekDatapinsts = [];

for (let i = 1; i <= 52; i++) {
    week.push(`Week ${i}`);
    weekDatapinsts.push(i);
}

// data block
const data = {
    labels: week,
    datasets: [{
        label: "Weekly data",
        data: weekDatapinsts,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// config block
const config = {
    type: 'bar',
    data: data,
    options: {
        // www.chartjs.org/docs/latest/axes/cartesian/#common-options-to-all-axes
        scales: {
            x: {
                min: 0,
                max: 6
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Previous and next button in the chart'
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const weekData = (start, end) => {
    const startScale = myChart.config.options.scales.x.min + start;
    const endScale = myChart.config.options.scales.x.max + end;
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");
    
    console.log(startScale);
    console.log(endScale);
    
    myChart.config.options.scales.x.min = startScale;
    myChart.config.options.scales.x.max = endScale;
    
    previousButton.disabled = false;
    nextButton.disabled = false;
    
    if (startScale < 0) {
        myChart.config.options.scales.x.min = 0;
        myChart.config.options.scales.x.max = 6;
        previousButton.disabled = true;
    }
    
    if (endScale > week.length) {
        myChart.config.options.scales.x.min = week.length - 6;
        myChart.config.options.scales.x.max = week.length - 1;
        nextButton.disabled = true;
    }
    
    myChart.update();
};


window.weekData = weekData;