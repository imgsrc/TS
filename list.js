"use strict";
var list = {
    items: [],
    add: function (item) {
        this.items.push(item);
        return this;
    },
    remove: function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    },
    get: function (index) {
        return this.items[index];
    },
    set: function (index, item) {
        this.items[index] = item;
    },
    forEach: function (fn) {
        for (var i = void 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    }
};
list.add(1)
    .add(2)
    .add(3);
list.remove(3);
list.set(1, 42);
console.log(list.get(0));
list.forEach(function (item, index) {
    console.log(index + ": " + item);
});
