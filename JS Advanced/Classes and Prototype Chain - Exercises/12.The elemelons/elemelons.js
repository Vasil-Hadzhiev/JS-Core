function createElemelons() {
    class Melon {
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        toString(){
            let indexOfMelon = this.constructor.name.indexOf('melon');
            let element = this.constructor.name.substring(0, indexOfMelon);
            if(this.constructor.name === 'Melolemonmelon'){
                element = 'Water';
            }
            return `Element: ${element}\nSort: ${this.melonSort}\nElement Index: `;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return super.toString() + this._elementIndex;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return super.toString() + this._elementIndex;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return super.toString() + this._elementIndex;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            return super.toString() + this._elementIndex;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.counter = 0;
            this.elements = [Watermelon, Firemelon, Earthmelon, Airmelon];
        }

        morph() {
            this.counter++;
            return this;
        }

        toString() {
            return new this.elements[this.counter % 4](this.weight, this.melonSort).toString()
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}