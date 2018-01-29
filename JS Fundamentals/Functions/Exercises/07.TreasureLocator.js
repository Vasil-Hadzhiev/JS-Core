function locator(input) {

    for (let i = 0; i < input.length; i += 2) {
        let x = input[i]
        let y = input[i + 1]

        console.log(specifyTreasure(x, y))
    }

    function specifyTreasure(x, y) {
        let tonga = [x, y, 0, 2, 6, 8]
        let tuvalu = [x, y, 1, 3, 1, 3]
        let samoa = [x, y, 5, 7, 3, 6]
        let cook = [x, y, 4, 9, 7, 8]
        let tokelau = [x, y, 8, 9, 0, 1]
        
        if (checker(tonga))
            return "Tonga"
        else if (checker(tuvalu))
            return "Tuvalu"
        else if (checker(samoa))
            return "Samoa"
        else if (checker(cook))
            return "Cook"
        else if (checker(tokelau))
            return "Tokelau"
        else
            return "On the bottom of the ocean"
    }

    function checker(array) {
        let [x, y, xMin, xMax, yMin, yMax] = array

        if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
            return true
        } else {
            return false
        }
    }
}