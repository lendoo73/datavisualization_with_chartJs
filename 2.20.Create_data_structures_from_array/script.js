const departmentDatasets = ["Sales Department", "Marketing Department", "HR Department", "IT Department"];
const cost = [2000, 3000, 4000, 5000];
const budget = [3000, 4000, 5000, 10000];
const tax = [1000, 1000, 1000, 1000];

const departmentInfo = departmentDatasets.map((department, index) => {
//    console.log(department);
//    console.log(index);
    let departmentDataset = {};
    departmentDataset.department = department;
    departmentDataset.financials = {};
    departmentDataset.financials.cost = cost[index];
    departmentDataset.financials.budget = budget[index];
    departmentDataset.financials.tax = tax[index];
    return departmentDataset;
});

console.log(departmentInfo);

// data block
const data = {
    //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        //data: [12, 19, 3, 5, 2, 3],
        data: departmentInfo,
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
            xAxisKey: "financials.tax"
        },
        scales: {
//            y: {
//                beginAtZero: true
//            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Create data structures from array',
            }
        }
    }
};

// init render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);