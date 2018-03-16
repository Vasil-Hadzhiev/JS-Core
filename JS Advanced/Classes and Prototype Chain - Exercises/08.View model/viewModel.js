class Textbox {
    constructor(selector, regex){
        this.selector = selector;
        this._invalidSymbols  = regex;
        this._elements = $(this.selector);
        this.value = $(this._elements[0]).val();
        this.onInput();
    }

    get value(){
        return this._value;
    }

    set value(newValue){
        this._value = newValue;
        for (let element of this.elements) {
            $(element).val(newValue);
        }
    }

    get elements(){
        return this._elements;
    }

    onInput() {
        this.elements.on('input', (event) => {
            this.value = $(event.target).val();
        });
    }

    isValid(){
        return !this._invalidSymbols.test(this._value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
