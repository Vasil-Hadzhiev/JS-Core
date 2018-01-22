function countLetters(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];

        if(currentLetter === letter){
            count++;
        }
    }

    return count;
}