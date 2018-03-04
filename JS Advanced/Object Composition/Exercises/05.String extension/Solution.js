(function solve() {

    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) === 0){
            return this.toString();
        }

        return str + this;
    };

    String.prototype.ensureEnd = function (str) {
        let isEnd = this.length - this.lastIndexOf(str) === str.length;
        if (isEnd) {
            return this.toString();
        }

        return this + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n >= this.length) {
            return this.toString();
        }
        if (this.indexOf(' ') === -1) {
            if (n < 4) {
                return '.'.repeat(n);
            }

            let result = '';
            for (let i = 0; i < n - 3; i++) {
                result += this[i];
            }

            return result + '...';
        }

        let words = this.split(' ');
        let result = '';
        for (let word of words) {
            if (result.length + word.length + 3 > n) {
                result = result.trim();
                break;
            }
            result += word + ' ';
        }

        return result + '...';
    };

    String.format = function (str) {
        if (arguments.length === 1) {
            return str;
        }

        let placeholders = [];
        for (let i = 1; i < arguments.length; i++) {
            placeholders.push(arguments[i]);
        }

        for (let i = 0; i < placeholders.length; i++) {
            let regex = new RegExp('\\{'+i+'\\}', 'g');
            str = str.replace(regex, placeholders[i]);
        }

        return str;
    }
})();