<div class="modal fade" id="chartdata" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="chartdataLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
    
                <div class="mb-3">
                    <input type="number" class="form-control" id="jan" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="feb" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="mar" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="apr" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="may" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="jun" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="jul" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="aug" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="sep" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="oct" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="nov" />
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="dec" />
                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="updateChart()">Save changes</button>
            </div>
        </div>
    </div>
</div>

<script>

const updateChart = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status === 200) {
            document.getElementById("updatesuccess").innerHTML = `
                <div class='alert alert-success'>New record created successfully</div>
            `;
//            console.log("chart", chart);
            replace(JSON.parse(xhttp.response));
        }
    };
    sendchartvalues = `jan=${document.getElementById("jan").value}
        &feb=${document.getElementById("feb").value}
        &mar=${document.getElementById("mar").value}
        &apr=${document.getElementById("apr").value}
        &may=${document.getElementById("may").value}
        &jun=${document.getElementById("jun").value}
        &jul=${document.getElementById("jul").value}
        &aug=${document.getElementById("aug").value}
        &sep=${document.getElementById("sep").value}
        &oct=${document.getElementById("oct").value}
        &nov=${document.getElementById("nov").value}
        &dec=${document.getElementById("dec").value}
    `;
    xhttp.open("POST", "./chart-modal.inc.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(sendchartvalues);
}

const replace = data => {
    console.log("data", data);
    chart.data.datasets[0].data = data;
    chart.data.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    chart.update();
};
    
</script>
