var div  = document.getElementById("location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("The Browser Does not Support Geolocation");
        //div.innerHTML = "The Browser Does not Support Geolocation";
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "  " + "Longitude: " + position.coords.longitude);
    //div.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    if(error.PERMISSION_DENIED){
        console.log("The User have denied the request for Geolocation.");
        //div.innerHTML = "The User have denied the request for Geolocation.";
    }
}

getLocation();