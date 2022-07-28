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
                <a href="s28a-multi-row-chart.php">
                    <button class="scale">&rarr;</button>
                </a>
                <a href="s27-chartjs-course-drill-down-chart.html">
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

$sql = "SELECT * FROM chartjs WHERE chartid = 2";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $charttype = $row["charttype"];
    $chartdata = $row["chartdata"];
    $chartlabel = $row["chartlabel"];
    $chartlabels = $row["chartlabels"];
    $chartbackgroundcolor = $row["chartbackgroundcolor"];
    $chartbordercolor = $row["chartbordercolor"];
  }
} else {
  echo "0 results";
}
$conn->close();

$jan = 9;
$feb = 10;
$mar = 5;
$apr = 2;
$may = 20;
$jun = 30;
$jul = 45;

$jsonchartlabels = json_encode(explode(",", $chartlabels));
$jsonchartdata = json_encode(explode(",", $chartdata));
$jsonbackgroundcolor = json_encode(explode(",", $chartbackgroundcolor));

    
?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>

<script>
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "<?= $charttype; ?>",

    // The data for our dataset
    data: {
        labels: <?= $jsonchartlabels; ?>,
        datasets: [{
            label: "<?= $chartlabel; ?>",
            backgroundColor: <?= $jsonbackgroundcolor; ?>,
            borderColor: "<?= $chartbordercolor; ?>",
            data: <?= $jsonchartdata; ?>,
        }]
    },

    // Configuration options go here
    options: {
        title: {
            text: ["Chart Database Connection"],
            display: true,
            fontSize: 20,
            //fontFamily: "New Times Roman",
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





