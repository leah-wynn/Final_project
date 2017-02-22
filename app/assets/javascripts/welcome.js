


// if(window.location.pathname == '/locations') {
  $(document).ready(function (){

  var myCoords = new google.maps.LatLng(33.762638,-84.382169);


  function initialize() {
    var mapOptions = {
       center: myCoords,
       zoom: 7,
       scrollwheel: false,   
    }

    var map = new google.maps.Map(document.getElementById("index-map"), mapOptions);

    var i;
    for (i = 0; i < arr.length; i++) {
      coords = new google.maps.LatLng(arr[i].latitude, arr[i].longitude);
      var marker = new google.maps.Marker({
          position: coords,
          map: map,
          animation: google.maps.Animation.DROP
      });

    //   var contentString = "<h2>someplace</h2>";

    //   var infowindow = new google.maps.InfoWindow({
    //       content: contentString
    //   });

    //   google.maps.event.addListener(marker, "click", function() {
    //         infowindow.open(map,marker);
    //   });
    }
    
  }

  google.maps.event.addDomListener(window, "load", initialize);
  })

// } 