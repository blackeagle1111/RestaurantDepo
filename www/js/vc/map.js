(function () {
    var map;

    //set up layout and screen size
    var h = $('#mapPage').height();
    var mapContent = $('#mapContent').height(h).css({ "margin-top": "30px" })
    var h1 = mapContent.height();
    var w = $('#mapPage').width();
    var lati = localStorage.getItem('lat');
    var lngi = localStorage.getItem('lng');

    //init userLocation
    var userLat = null;
    var userLng = null;
    
    $(document).on('pageshow', '#mapPage', function () {

        //get the user's location
        refresh();

        function onSuccess(position) {
            userLat = position.coords.latitude;
            userLng = position.coords.longitude;
            $('#status').html('Congrat! Your location is available');

            //set up the map to display
            map = new GMaps({
                div: '#mapContent',
                lat: lati,
                lng: lngi,
                width: w + 'px',
                height: h1 + 'px'
            });
            //draw marker at pho 's location
            map.addMarker({
                lat: lati,
                lng: lngi,
                title: 'Pho Bac',
                click: function (e) {
                    alert('Pho Bac');
                }
            });
            //draw marker at user 's location
            map.addMarker({
                lat: userLat,
                lng: userLng,
                title: 'Your Location',
                click: function (e) {
                    alert('Your Location');
                }
            });
            //draw route from user's location to pho's location
            map.drawRoute({
                origin: [userLat, userLng],
                destination: [lati, lngi],
                travelMode: 'driving',
                strokeColor: 'blue',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });
            //zoom map to fit two markers           
            map.fitZoom();


            //fit the route to the screen
            /*
            var bounds = [];
            latlngs = [{ lat: lati, lng: lngi }, { lat: userLat, lng: userLng}];
            for (ll in latlngs) {
            var point = new google.maps.LatLng(ll.lat, ll.lng);
            bounds.push(point);
            };
            map.fitBounds(bounds);
            */
            //map.fitBounds([{lat:lati, lng:lngi}, {lat:userLat,lng: userLng}]);


        }

        function onError(error) {
            $('#status').html('Sorry. Cannot get your location ' + error);
        }

        function refresh() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    });

})()
