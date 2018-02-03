function formFiller(name,email,phone,text) {
    let usernamePattern = /<![a-zA-Z]+!>/g
    let emailPattern = /<@[a-zA-Z]+@>/g
    let phonePattern = /<[+][a-zA-Z]+[+]>/g
    let textAsStr = text.join('\n')

    textAsStr = textAsStr.replace(usernamePattern,name)
    textAsStr = textAsStr.replace(emailPattern,email)
    textAsStr =textAsStr.replace(phonePattern,phone)

    console.log(textAsStr)
}