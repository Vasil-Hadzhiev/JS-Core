function isPalindrome(word) {
    var front = ""
    for (let i = 0; i < word.length / 2; i++) {
        front += word[i]
    }

    var back = ""
    for (let i = word.length - 1; i >= Math.floor(word.length / 2); i--) {
        back += word[i]
    }

    let result = front === back ? true : false

    return result
}