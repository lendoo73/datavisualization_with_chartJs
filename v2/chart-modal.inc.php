<?php

include $_SERVER["DOCUMENT_ROOT"] . "/dbconfig.php";

$jan2 = $_POST["jan"];
$feb2 = $_POST["feb"];
$mar2 = $_POST["mar"];
$apr2 = $_POST["apr"];
$may2 = $_POST["may"];
$jun2 = $_POST["jun"];
$jul2 = $_POST["jul"];
$aug2 = $_POST["aug"];
$sep2 = $_POST["sep"];
$oct2 = $_POST["oct"];
$nov2 = $_POST["nov"];
$dec2 = $_POST["dec"];

// Create connection
$conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO barchartjs (jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, `dec`)
VALUES ('$jan2', '$feb2', '$mar2', '$apr2', '$may2', '$jun2', '$jul2', '$aug2', '$sep2', '$oct2', '$nov2', '$dec2')";

if ($conn->query($sql) === TRUE) {
    
    // Create connection
    $conn2 = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);
    // Check connection
    if ($conn2->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM barchartjs";
    $result = $conn2->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
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
        while($row = $result->fetch_assoc()) {
            $jan[] = $row["jan"];
            $feb[] = $row["feb"];
            $mar[] = $row["mar"];
            $apr[] = $row["apr"];
            $may[] = $row["may"];
            $jun[] = $row["jun"];
            $jul[] = $row["jul"];
            $aug[] = $row["aug"];
            $sep[] = $row["sep"];
            $oct[] = $row["oct"];
            $nov[] = $row["nov"];
            $dec[] = $row["dec"];
        } 
    } else {
        echo "0 results";
    }
    $conn2->close();
    
//    echo "<div class='alert alert-success'>New record created successfully</div>";
    
} else {
    echo "<div class='alert alert-danger'>$sql $conn->error</div>";
}

$conn->close();

$jansum = array_sum($jan);
$febsum = array_sum($feb);
$marsum = array_sum($mar);
$aprsum = array_sum($apr);
$maysum = array_sum($may);
$junsum = array_sum($jun);
$julsum = array_sum($jul);
$augsum = array_sum($aug);
$sepsum = array_sum($sep);
$octsum = array_sum($oct);
$novsum = array_sum($nov);
$decsum = array_sum($dec);

$totalyeararray = array($jansum, $febsum, $marsum, $aprsum, $maysum, $junsum, $julsum, $augsum, $sepsum, $octsum, $novsum, $decsum);

$jsontotalarray = json_encode($totalyeararray);

echo $jsontotalarray;

?>
