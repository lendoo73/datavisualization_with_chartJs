// data block
const data = {
    //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        //data: [12, 19, 3, 5, 2, 3],
        data: [
            { 
                "department": "Sales Department",
                "financials": {
                    "cost": 2000,
                    "budget": 2500
                }
            },
            { 
                "department": "Marketing Department",
                "financials": {
                    "cost": 10000,
                    "budget": 12500
                }
            },
            { 
                "department": "HR Department",
                "financials": {
                    "cost": 5000,
                    "budget": 6000
                }
            },
            { 
                "department": "IT Department",
                "financials": {
                    "cost": 9000,
                    "budget": 1200
                }
            },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// config block
const config = {
    type: 'bar',
    data: data,
    options: {
        indexAxis: "y",
        parsing: {
            yAxisKey: "department",
            xAxisKey: "financials.cost"
        },
        scales: {
//            y: {
//                beginAtZero: true
//            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Data Structures',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);