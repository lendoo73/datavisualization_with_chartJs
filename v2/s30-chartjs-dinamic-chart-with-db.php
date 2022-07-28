<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" type="image/x-icon" href="" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="../style.css" />

    <title>Hello, world!</title>
</head>

<body>
    <header>
        <div class="chartMenu">
            <p>
                <span class="active">Chart JS 2</span>
                <a href="s13-chartjs-course-line-chart.html">
                    <button class="scale btn btn-outline-secondary btn-sm">&rarr;</button>
                </a>
                <a href="s29a-chartjs-update-function.html">
                    <button class="scale btn btn-outline-secondary btn-sm">&larr;</button>
                </a>
                <a class="navButton" href="../">
                    <span>Chart JS 3.7.0</span>
                </a>
            </p>
        </div>
    </header>
    <div class="chartCard">
        <div class="chartBox">
            <canvas id="myChart"></canvas>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chartdata">Input Chart Data</button>
            <div id="updatesuccess"></div>
        </div>
    </div>
    <?php include "chart-modal.php"; ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>

<script>
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
//            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            text: ["Dinamic Chart with DB"],
            display: true,
            fontSize: 20,
            fontColor: 'green',
            fontStyle: "bold",
            padding: 5,
            lineHeight: 1.2,
        }
    }
});
    
</script>

  </body>
</html>





