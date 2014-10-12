var Order = function (orderID, name, size, amount, price) {
    this.orderID = orderID || new Date().toLocaleTimeString();
    this.name = name || "Pho";
    this.size = size || "S";
    this.amount = amount || 1;
    this.price = price || 7;
}