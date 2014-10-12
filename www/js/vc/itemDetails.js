(function () {

    var menuManager = MenuManager.getInstance();
    var items = null;
    var orderID = null;
    var addToCart = document.getElementById('AddToCart');

    $(document).on('pageshow', '#itemDetail', function (e) {
        e.preventDefault();
        //register the button
        $('#AddToCart').on('tap', function (e) {
            e.preventDefault();
            UpdateCart(orderID);
            //navigate to main menu
            alert('item successfully added to card');
            $.mobile.changePage('#menu');
        });

        var itemID = ($.mobile.pageData && $.mobile.pageData.itemID) ? $.mobile.pageData.itemID : null;
        var catID = ($.mobile.pageData && $.mobile.pageData.catID) ? $.mobile.pageData.catID : null;
        $('#category').empty().append('<h1>' + menuManager.getCategoryName(catID) + '</h1>');
        items = menuManager.getItemDetailByID(itemID);
        if (jQuery.isEmptyObject(items)) {
            $('#displayItem').empty();
            $('#displayItem').append('<p>This product does not exist/ have been deleted</p>');
        } else {
            DisplayProduct(items);
        }


    })

    function DisplayProduct(items) {
        $('#displayItem').empty();
        var url = items[0].url;
        var name = items[0].name;
        var desc = items[0].desc;
        //get the orderID when it first loads
        orderID = items[0].ID;

        //create main layout
        var html = '<div>' +
                        '<img class="imageItem" src="' + url + '"/>' +
                        '<h1>' + name + '</h1>' +
                        '<hr>' +
                        desc + '<br>' +
                        '<select id="itemSize"></select><br><span id="price">7</span>' +
                   '</div>';
        $('#displayItem').append(html);

        //add options to select element
        for (var i = 0; i < items.length; i++) {
            var sizehtml = '<option>Size ' + items[i].size + '</option>';
            $('#itemSize').append(sizehtml);
        }
        //update item in cart
        var cartCount = menuManager.getOrder();
        //$('#cart').html(cartCount.length);

        //register option when users choose size for their order
        var select = document.getElementById('itemSize');
        select.addEventListener('change', function () {
            $('select option:selected').each(function (index, element) {
                var id = element.index;
                orderID = items[id].ID;
                var price = items[id].price;
                $('#price').empty().append(price);
            });
        }, true);
    }

    function UpdateCart(orderID) {
        var CurItem = menuManager.getItemByID(orderID);
        var orderItem = new Order(CurItem.ID, CurItem.name, CurItem.size, 1, CurItem.price);
        menuManager.saveOrder(orderItem);
    }

})();