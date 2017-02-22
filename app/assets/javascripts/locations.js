// if(window.location.pathname == '/show') {
//   $(document).ready(function (){

//     var myCoords = new google.maps.LatLng(latitude,longitude);

//   function initialize() {
//     var mapOptions = {
//        center: myCoords,
//        zoom: 15,
//        scrollwheel: false,   
//     }

//     var map = new google.maps.Map(document.getElementById("location-map"), mapOptions);

//     var marker = new google.maps.Marker({
//         position: myCoords,
//         map: map,
//         animation: google.maps.Animation.DROP
//     });
   
//     var contentString = "<h2>someplace</h2>";

//     var infowindow = new google.maps.InfoWindow({
//         content: contentString
//     });

//     google.maps.event.addListener(marker, "click", function() {
//           infowindow.open(map,marker);
//     });
//   }

//   google.maps.event.addDomListener(window, "load", initialize);
// })
// }
// else {
//   $(document).ready(function (){

//   var myCoords = new google.maps.LatLng(33.762638,-84.382169);


//   function initialize() {
//     var mapOptions = {
//        center: myCoords,
//        zoom: 5,
//        scrollwheel: false,   
//     }

//     var map = new google.maps.Map(document.getElementById("index-map"), mapOptions);

//     var i;
//     for (i = 0; i < arr.length; i++) {
//       coords = new google.maps.LatLng(arr[i].latitude, arr[i].longitude);
//       var marker = new google.maps.Marker({
//           position: coords,
//           map: map,
//           animation: google.maps.Animation.DROP
//       });

//     //   var contentString = "<h2>someplace</h2>";

//     //   var infowindow = new google.maps.InfoWindow({
//     //       content: contentString
//     //   });

//     //   google.maps.event.addListener(marker, "click", function() {
//     //         infowindow.open(map,marker);
//     //   });
//     }
    
//   }

//   google.maps.event.addDomListener(window, "load", initialize);
//   })

// } 

  