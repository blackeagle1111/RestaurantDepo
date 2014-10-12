(function () {

    var manager = MenuManager.getInstance();
    //initial value for first display
    var id = 0;
    //resgister listener for select element
    var select = document.getElementById("select-native-1");
    var navRight = document.getElementById("navRightBtn");

    //change items when menu selector changes
    if (select.addEventListener)
        select.addEventListener('change', UpdateItems, true);

    //add listener to back button when clicked
    if (navRight.addEventListener) {
        navRight.addEventListener('tap', function () {
            $.mobile.changePage('#menu');
        }, true);
    }

    function UpdateItems() {
        $('select option:selected').each(function (index, element) {
            var id = element.index;
            var items = manager.getItemByCategory(id);
            DisplayItem(items);
        })
    }

    $(document).on('pageshow', '#menu', function (e) {
        e.preventDefault();
        var items = manager.getItemByCategory(id);
        DisplayItem(items);
        UpdateCartDisplay();
    });

    function DisplayItem(items) {

        if (jQuery.isEmptyObject(items)) {
            $('#itemList').empty();
            $("<p>No Product in this category</p>").appendTo('#itemList');
        } else {
            $('#itemList').empty();
            for (var i = 0; i < items.length; i++) {
                var html = '<li ><a href="#itemDetail?catID=' + items[i].categoryID + '&itemID=' + items[i].itemID + '"><img src="images/thumb/001.jpg"/><p class="itemInfo">' + items[i].name + '<br>' + items[i].desc + '</p></a></li>';
                $('#itemList').append(html);
            }

        }
    }

    function UpdateCartDisplay() {
        var orders = manager.getOrder();
        if (orders.length == 0) {
            var html = '<li>Cart is empty</li>';
            $('#orderList').append(html);
        } else {

            //construct the table of ordered items
            $('#table').empty();
            var html_head = '<tr><th>Item</th><th>Size</th><th>Amount</th><th>Price</th></tr>';
            $('#table').append(html_head)
            var total = null;
            for (var i = 0; i < orders.length; i++) {
                var html_data =
                         '<tr>' +
                            '<td>' + orders[i].name + '</td>' +
                            '<td>' + orders[i].size + '</td>' +
                            '<td>' + orders[i].amount + '</td>' +
                            '<td>' + orders[i].price + '</td>' +
                        '</tr>';
                $('#table').append(html_data);
                total += orders[i].price;
            }
            //get the total
            var html_total = '<span style="text-align:right">Total ' + total + '</span>';
            $('#total').empty().append(html_total);
        }
    }
})();