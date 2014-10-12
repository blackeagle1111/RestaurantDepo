(function () {
    var manager = MenuManager.getInstance();
    var menuItems = manager.getItems();
    var tempItems = [];
    var indexs = [];
    
    //generate and shuffle numbers
    for (var i = 0; i < menuItems.length; i++) {
        indexs.push(i);
    }
    shuffle(indexs);
    //get 6 random items
    for (var i = 0; i < 6; i++) {
        tempItems.push(menuItems[indexs[i]]);
    }

    function shuffle(array) {
        var counter = array.length, temp, index;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    //start angular 
    angular.module('MainApp', [])
        .controller('GalleryCtrl', function ($scope, $http) {
            $scope.items = tempItems;
        });

})();