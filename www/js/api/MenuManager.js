var MenuManager = (function () {
    var instance;
    function createObject() {
        var storage = CacheManager.getInstance();
        var init = Initializer.getInstance();
        var items = [];
        var CATEGORY_KEYS = "CategoryKeys";
        var MENU_KEYS = "MenuKeys";
        var RATING_KEYS = "RatingKeys";
        var USER_KEYS = "UserKeys";
        var REVIEW_KEYS = "ReviewKeys";
        var ORDER_KEYS = "OrderKeys";
        var COORD_KEYS = "CoordKeys";
        init.createMenu();
        init.createCategory();
        init.createRating();
        init.createUser();
        return {
            getItems: function () {
                return items = storage.get(MENU_KEYS) || {};
            },
            getItemDetailByID: function (itemID) {
                items = storage.get(MENU_KEYS) || {};
                var tempItems = [];
                for (var i = 0; i < items.length; i++) {
                    if (items[i].itemID == itemID) {
                        tempItems.push(items[i]);
                    }
                }
                return tempItems;
            },
            getItemByID: function (ID) {
                var items = storage.get(MENU_KEYS) || {};
                for (var i = 0; i < items.length; i++) {
                    if (items[i].ID == ID) {
                        return items[i];
                    }
                }
            },
            getItemByCategory: function (catID) {
                var tempItems = [];
                items = storage.get(MENU_KEYS) || {};
                if (jQuery.isEmptyObject(items)) {
                    items = init.createMenu();
                }
                for (var i = 0; i < items.length; i++) {
                    if (items[i].categoryID == catID) {
                        tempItems.unshift(items[i]);
                    }
                }
                return tempItems.sort(function (item1, item2) {
                    if (item1.name.toLowerCase() == item2.name.toLowerCase()) {
                        return 0;
                    } else if (item1.name.toLowerCase() > item2.name.toLowerCase()) {
                        return 1;
                    } else
                        return -1;
                });
            },
            getCategoryName: function (catID) {
                var cat = storage.get(CATEGORY_KEYS) || {};
                if (jQuery.isEmptyObject(cat)) {
                    cat = init.createCategory();
                }
                for (var i = 0; i < cat.length; i++) {
                    if (cat[i].categoryID == catID) {
                        return cat[i].name;
                    }
                }
            },

            getAllRatings: function () {
                var ratings = storage.get(RATING_KEYS) || {};
                if (jQuery.isEmptyObject(ratings))
                    ratings = init.createRating();
                return ratings;
            },

            getRatingDetailByID: function (rateID) {
                var ratings = storage.get(RATING_KEYS) || {};
                for (var i = 0; i < ratings.length; i++) {
                    if (ratings[i].rateID == rateID) {
                        return ratings[i];
                    }
                }
            },
            getRatingByUserID: function (userID) {
                var ratings = storage.get(RATING_KEYS) || {};
                var tempRatings = [];
                for (var i = 0; i < ratings.length; i++) {
                    if (ratings[i].userID == userID) {
                        tempRatings.unshift(ratings[i]);
                    }
                }
                return tempRatings.sort(function (rate1, rate2) {
                    if (rate1.dateCreated == rate2.dateCreated) {
                        return 0;
                    } else if (rate1.dateCreated > rate2.dateCreated) {
                        return 1;
                    } else if (rate1.dateCreated > rate2.dateCreated) {
                        return -1;
                    }
                });
            },
            getUserName: function (rateID) {
                var rates = storage.get(RATING_KEYS) || {};
                var users = storage.get(USER_KEYS) || {};
                if (jQuery.isEmptyObject(users)) {
                    users = init.createUser();
                }
                if (jQuery.isEmptyObject(rates)) {
                    rates = init.createRating();
                }
                outer:
                for (var i = 0; i < rates.length; i++) {
                    if (rates[i].rateID == rateID) {
                        for (var j = 0; j < users.length; j++) {
                            if (users[j].userID == rates[i].userID) {
                                return users[j].nickName;
                                break outer;
                            }
                        }
                    }
                }
            },
            saveNewRating: function (rating) {
                var rates = storage.get(RATING_KEYS) || {};
                rates[rates.length] = rating;
                //storage.flushKey(RATING_KEYS);
                storage.put(RATING_KEYS, rates);
            },
            saveReview: function (reviews) {
                storage.remove(REVIEW_KEYS);
                storage.put(REVIEW_KEYS, reviews);
            },
            getReview: function () {
                return storage.get(RATING_KEYS) || {};
            },
            saveOrder: function (order) {
                var orders = storage.get(ORDER_KEYS) || [];
                //get orders size;                
                var match = false; // check if the item already exists                                
                if (orders.length > 0) {
                    for (var i = 0; i < orders.length; i++) {
                        if (orders[i].orderID == order.orderID) {
                            orders[i].amount += order.amount;
                            orders[i].price = order.price * orders[i].amount;
                            match = true;
                            break;
                        }
                    }
                }
                // if an item is not in the order
                if (match == false) {
                    orders.unshift(order)
                    storage.put(ORDER_KEYS, orders);
                }
            },
            getOrder: function () {
                return storage.get(ORDER_KEYS) || {};
            },
            saveCoordination: function (coord) {
                storage.put(COORD_KEYS, coord);
            },
            getCoordination: function () {
                return storage.get(COORD_KEYS);
            }

        }

    }
    return {
        getInstance: function () {
            if (!instance)
                instance = createObject();
            return instance;
        }
    }
})();