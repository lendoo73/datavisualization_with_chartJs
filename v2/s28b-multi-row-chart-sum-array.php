<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" type="image/x-icon" href="" />
    <link rel="stylesheet" href="../style.css" />

    <title>Hello, world!</title>
</head>

<body>
    <header>
        <div class="chartMenu">
            <p>
                <span class="active">Chart JS 2</span>
                <a href="s29-chartjs-update-function.html">
                    <button class="scale">&rarr;</button>
                </a>
                <a href="s28a-multi-row-chart.php">
                    <button class="scale">&larr;</button>
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
        </div>
    </div>

<?php

include "../dbconfig.php";

    // Create connection
$conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM barchartjs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $jan = array();
    $feb = array();
    $mar = array();
    $apr = array();
    $may = array();
    $jun = array();
    $jul = array();
    $aug = array();
    $sep = array();
    $oct = array();
    $nov = array();
    $dec = array();

    $barcolor = array();
    $labelvalue = array();
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $jan[] = $row['jan'];
        $feb[] = $row['feb'];
        $mar[] = $row['mar'];
        $apr[] = $row['apr'];
        $may[] = $row['may'];
        $jun[] = $row['jun'];
        $jul[] = $row['jul'];
        $aug[] = $row['aug'];
        $sep[] = $row['sep'];
        $oct[] = $row['oct'];
        $nov[] = $row['nov'];
        $dec[] = $row['dec'];

        $rowarray[] = array($row['jan'],$row['feb'],$row['mar'],$row['apr'],$row['may'],$row['jun'],$row['jul'],$row['aug'],$row['sep'],$row['oct'],$row['nov'],$row['dec']);
        $barcolor[] = $row['barcolor'];
        $labelvalue[] = $row['labelvalue'];

        // echo $jsonrowarray[] = json_encode($rowarray[]);
    }
} else {
    echo "0 results";
}
$conn->close(); 

$sumjan = array_sum($jan);
$sumfeb = array_sum($feb);
$summar = array_sum($mar);
$sumapr = array_sum($apr);
$summay = array_sum($may);
$sumjun = array_sum($jun);
$sumjul = array_sum($jul);
$sumaug = array_sum($aug);
$sumsep = array_sum($sep);
$sumoct = array_sum($oct);
$sumnov = array_sum($nov);
$sumdec = array_sum($dec);
    
$yeararray = array($sumjan, $sumfeb, $summar, $sumapr, $summay, $sumjun, $sumjul, $sumaug, $sumsep, $sumoct, $sumnov, $sumdec);

?>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>

<script>
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "bar",

    // The data for our dataset
    data: {
        labels: ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
        datasets: [{
            label: "Year",
            backgroundColor: "blue",
            borderColor: "blue",
            data: <?php echo json_encode($yeararray); ?>,
        }]
    },

    // Configuration options go here
    options: {
        title: {
            text: "Chart from database (sum)",
            display: true,
            fontSize: 20,
            //fontFamily: "New Times Roman",
            fontStyle: "bold",
            padding: 5,
            lineHeight: 1.2,
        }
    }
});
</script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>