function getDay(day) {
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let index = arr.indexOf(day)

    let result = index > -1 ? index + 1 : "error"

    return result
}