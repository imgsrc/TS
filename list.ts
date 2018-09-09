interface Enumerable {
    forEach: (fn: (item: number, index: number, list: List) => void) => void;
}

interface List extends Enumerable {
    items: number[];

    add: (item: number) => List;
    remove: (item: number) => void;
    get: (index: number) => number;
    set: (index: number, item: number) => void;
}

const list: List = {
    items: [],

    add(item) {
        this.items.push(item);
        return this;
    },

    remove(item) {
        this.items = this.items.filter(i => i !== item);
    },

    get(index) {
        return this.items[index];
    },

    set(index, item) {
        this.items[index] = item;
    },

    forEach(fn) {
        for (let i; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    }
}

list.add(1)
    .add(2)
    .add(3);

list.remove(3);
list.set(1, 42);

console.log(list.get(0));

list.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});