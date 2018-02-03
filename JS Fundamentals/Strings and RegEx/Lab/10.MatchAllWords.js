function getWords(input) {
    let words = input.split(/\W+/g).filter(w => w!== "")

    console.log(words.join("|"))
}