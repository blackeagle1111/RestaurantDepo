var AppUtil = {};
AppUtil.showMessage = function (message) {
    navigator.notification.alert(message, null, 'Restaurant Depo', 'Ok');
};
var Coordination = function (lat, lng) {
    this.lat = lat;
    this.lng = lng;
}