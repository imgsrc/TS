interface IEnumerable {
    forEach: (fn: (item: number, index: number, list: List) => void) => void;
}

interface IList extends IEnumerable {
    items: any[];

    add: (item: any) => List;
    remove: (item: any) => void;
    get: (index: any) => any;
    set: (index: any, item: any) => void;
}

class List implements IList {
    items = []
,

    add(item) {
        this.items.push(item);
        return this;
    }

,

    remove(item) {
        this.items = this.items.filter(i => i !== item);
    }

,

    get(index) {
        return this.items[index];
    }

,

    set(index, item) {
        this.items[index] = item;
    }

,

    forEach(fn) {
        for (let i = 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    }
}

const list = new List();

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
