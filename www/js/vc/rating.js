(function () {
    var menuManager = MenuManager.getInstance();    
    $(document).on('pageshow', '#rating', function (e) {
        e.preventDefault();
        $('#userRating').empty();
        UpdateRatingList();
    })
    function UpdateRatingList() {
        var rates = menuManager.getAllRatings();

        rates = rates.sort(function(rate1,rate2){
            if (rate1.dateCreated == rate2.dateCreated) {
            return 0;
        } else if (rate1.dateCreated > rate2.dateCreated) {
            return 1;
        } else if (rate1.dateCreated > rate2.dateCreated) {
            return -1;
        }
        });
        for (var i = 0; i < rates.length; i++) {
            var rateID = rates[i].rateID;
            var userName = menuManager.getUserName(rateID);
            var comment = rates[i].comment;
            var score = rates[i].score.toString();
            var html = '<li>' +
                                '<a href="#">' + userName + '</a><br>' +
                                'Comment: ' + comment + '<br>' +
                                'Rate: ' + score +
                            +'</li>';
            $('#userRating').append(html);
        }

    }    
})();