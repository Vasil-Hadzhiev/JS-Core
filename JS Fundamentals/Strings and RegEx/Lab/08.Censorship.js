function censor(text, censoredArray) {

    for (let i = 0; i < censoredArray.length; i++) {
        let currentCensorStr = censoredArray[i]

        while(text.indexOf(currentCensorStr) > - 1){
            text = text.replace(currentCensorStr, "-".repeat(currentCensorStr.length))
        }
    }

    console.log(text)
}