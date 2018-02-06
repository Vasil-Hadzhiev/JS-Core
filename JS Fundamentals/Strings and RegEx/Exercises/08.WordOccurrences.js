function findWordCount(str, word) {
    let count = 0
    let regex = new RegExp("\\b" + word + "\\b", "gi")
    let match = regex.exec(str);

    while (match) {
        count++;
        match = regex.exec(str);
    }

    console.log(count);
}