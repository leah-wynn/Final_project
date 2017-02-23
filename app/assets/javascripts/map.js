(function(){
	window.renderMap = function(element,center,markers,zoom){
		markers = markers ||[]
    var mapOptions = {
       zoom: zoom || 10,
       scrollwheel: false,   
    }
   if(center){
    var latlng = new google.maps.LatLng(center.latitude,center.longitude);
   	mapOptions.center = latlng
    markers.push(center);
   }
    var map = new google.maps.Map(element, mapOptions);

    if(markers){
    	markers.forEach(function(marker){
    		new google.maps.Marker({
    			position: new google.maps.LatLng(marker.latitude, marker.longitude),
    			map: map,
    			animation: google.maps.Animation.DROP,
    		})
    	})
    }
	}
})();