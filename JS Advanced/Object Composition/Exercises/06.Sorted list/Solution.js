function getSortedList() {
    let list = [];

    return {
        add: function (element) {
            list.push(element);
            this.size++;
            list = list.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index < 0 || index > list.length - 1) {
                throw new Error('Index out of Range!');
            }

            list.splice(index, 1);
            this.size--;
        },
        get: function (index) {
            if (index < 0 || index > list.length - 1) {
                throw new Error('Index out of Range!');
            }

            return list[index];
        },
        size: 0
    };
}