var Item = function (id, name, desc, price, size, itemCategory) {
    this.id = id || "Item_" + (new Date()).getTime();
    this.name = name || "";
    this.desc = desc || "";
    this.price = price || "";
    this.size = size || "";
    this.itemCategory = itemCategory || "";
};

Item.prototype.toString = function () {
    return "Name =" + this.name + ", " +
    "Description =" + this.desc + ", " +
    "Price =" + this.price + ", " +
    "Size =" + this.size;
};