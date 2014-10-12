(function () {
    var Review = [];
    window.coord = {};
    var manager;
    if (jQuery.fn.jquery !== '1.11.1') {
        window.jQuery = window.$ = jUse;
        manager = Manager.getInstance();
    }
    var auth = {
        //
        // Update with your auth tokens.
        //
        consumerKey: "pRmJqrpBxnAq19PO9_gqNw",
        consumerSecret: "jjgmcymO4-4blxeXHUNF-XIjO1w",
        accessToken: "Ns_zJKnhOAbmIENEps3o56vDXhp8kLHS",
        // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
        // You wouldn't actually want to expose your access token secret like this in a real application.
        accessTokenSecret: "0spYNfgRPPJyd4Trlw_cywkW2_k",
        serviceProvider: {
            signatureMethod: "HMAC-SHA1"
        }
    };

    var accessor = {
        consumerSecret: auth.consumerSecret,
        tokenSecret: auth.accessTokenSecret
    };
    parameters = [];
    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

    var message = {
        'action': 'http://api.yelp.com/v2/business/pho-bac-los-angeles',
        'method': 'GET',
        'parameters': parameters
    };
    window.jQuery = window.$ = jNew;
    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);

    var parameterMap = OAuth.getParameterMap(message.parameters);
    console.log(parameterMap);
    console.log(jQuery.fn.jquery);
    window.jQuery = window.$ = jNew;
    $.ajax({
        'url': message.action,
        'data': parameterMap,
        'dataType': 'jsonp',
        'jsonpCallback': 'cb',
        'success': function (data, textStats, XMLHttpRequest) {
            console.log(data);
            $.each(data, function (k, v) {
                if (k == 'rating') {
                    $('#rateCount').append('-' + v);
                }
                if (k == 'reviews') {
                    for (var i = 0; i < v.length; i++) {
                        var reviews = v;
                        var userName = reviews[i].user.name;
                        var userImage = reviews[i].user.image_url;
                        var excerpt = reviews[i].excerpt;
                        var rate = reviews[i].rating;
                        var html = '<li>' +
                                        '<img style="float:left" src="' + userImage + '"/>' +
                                        'Name: ' + name + '<br>' +
                                        excerpt + '<br>' +
                                        rate
                                    + '</li>';
                        $('#listReview').append(html);
                    }
                }
                if (k == 'location') {
                    coord = new Coordination(v.coordinate.latitude, v.coordinate.longitude);
                    localStorage.setItem('lat', coord.lat);
                    localStorage.setItem('lng', coord.lng);
                    //manager.saveCoordination(coord)
                    //console.log(manager.getCoordination());

                }
                Review.push([k, v]);
            });
            //manager.saveReview(Review);
        }
    });

    window.jQuery = window.$ = jUse;




})();
