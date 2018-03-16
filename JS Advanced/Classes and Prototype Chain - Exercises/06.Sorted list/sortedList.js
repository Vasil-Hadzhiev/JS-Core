class SortedList {
    constructor(){
        this.sortedList = [];
        this.size = 0;
    }

    add(T){
        this.sortedList.push(T);
        this.size++;
        this.sortedList.sort((a, b) => a - b);
    }

    remove(index){
        if (this.size === 0) {
            throw new Error('List is empty!');
        }

        if (index < 0 || index > this.sortedList.length - 1) {
            throw new RangeError('Index out of Range!');
        }

        this.sortedList.splice(index, 1);
        this.size--;
    }

    get(index){
        if (this.size === 0) {
            throw new Error('List is empty!');
        }

        if (index < 0 || index > this.sortedList.length - 1) {
            throw new RangeError('Index out of Range!');
        }

        return this.sortedList[index];
    }
}

let list = new SortedList();
list.add(1);
list.add(2);
list.add(3);
list.remove(0);
console.log(list.get(0));
console.log(list.size);