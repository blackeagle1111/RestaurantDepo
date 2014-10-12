(function () {
    var menuManager = MenuManager.getInstance();
    window.jQuery = window.$ = jUse;
    $(document).on('pageshow', '#newComment', function (e) {

        e.preventDefault();
        $("#saveComment").on('tap', function () {
            e.preventDefault();
            var rate = new Rate($('#vid').val() || Math.floor(Math.random() * 10000),
                                    null,
                                    $("#desc").val(),
                                    $('#score').val(),
                                    new Date().toLocaleDateString());
            menuManager.saveNewRating(rate);
            $.mobile.changePage("#rating");
        })
    })
})();