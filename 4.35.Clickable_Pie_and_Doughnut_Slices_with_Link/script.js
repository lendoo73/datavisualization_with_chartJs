// data block
const data = {
    labels: ['Sales', 'Cost', 'Profit', "ABC"],
    datasets: [{
        label: '# of Votes',
        data: [
            {
                financials: "Sales", 
                url: "https://www.google.com",
                amount: {
                    usd: 900,
                    eur: 600
                }
            },
            {
                financials: "Cost", 
                url: "https://www.chartjs.org",
                amount: {
                    usd: 600,
                    eur: 450
                }
            },
            {
                financials: "Profit", 
                url: "https://www.amazon.com",
                amount: {
                    usd: 450,
                    eur: 300
                }
            },
            {
                financials: "ABC", 
                url: "https://www.flipkart.com",
                amount: {
                    usd: 450,
                    eur: 300
                }
            }
        ],
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
        parsing: {
            key: "amount.usd"
        },
        plugins: {
            title: {
                display: true,
                text: 'Clickable Pie and Doughnut Slices with Link'
            }
        }
    }
};

// init render block
const ctx = document.getElementById('myChart');

const myChart = new Chart(
    ctx,
    config
);

// https://www.chartjs.org/docs/latest/developers/api.html#getelementsateventformode-e-mode-options-usefinalposition
const pieChartCanvas = event => {
    //console.log(event);
    const clickedSlice = myChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
//    console.log(clickedSlice);
    
    if (clickedSlice.length) {
        const pieSlice = clickedSlice[0];
//        console.log(pieSlice.datasetIndex);
//        console.log(pieSlice.index);
        const link = myChart.data.datasets[pieSlice.datasetIndex].data[pieSlice.index].url;
        //location.href = link;
        window.open(link);
    }
};

ctx.onclick = pieChartCanvas;
