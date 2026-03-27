const reader = new Html5Qrcode("camera");
let scannerOn = false; //don't use the interface to make decisions!!
// Based on language needs (if needed to change language may become difficult and combersome)

function toggleScanner() {
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "CANCEL";
    } else{
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";
    }
}

function startScanner() {
    reader.start(
        { facingMode: "environment" }, //User = selfy environment = back camera 
        {}, // frame rate / specific things NOT NEEDED HERE
        function (text)  {
            console.log("RAW:",text); /* TASK 3: Trying to view LINE TEST (ADDING A LABEL TO HELP TEST LINE) */
            const place = JSON.parse(text);
            console.log("Parsed object",place); /* TASK #: TRYINE TO SEE PARSED DATA (ADDING A LABEL TO HELP TEST LINE) */
            showMarkerAt(place.top, place.left);
            toggleScanner();
        }   
    ).catch(function (err) {
            console.error(err);
        }); 
}

function stopScanner() {
    reader.stop();
}
function showMarkerAt(top, left) {
    marker.style.top = top;
    marker.style.left = left; 
}


