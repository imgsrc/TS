"use strict";
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
        return this;
    };
    List.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    List.prototype.set = function (index, item) {
        this.items[index] = item;
    };
    List.prototype.forEach = function (fn) {
        for (var i = 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    };
    return List;
}());
var list = new List();
/*
list.add(1)
    .add(2)
    .add(3);

list.remove(3);
list.set(1, 42);

console.log(list.get(0));

list.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});*/
