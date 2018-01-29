function radioCrystals(input) {

    let targetSize = input[0]

    for(let i = 1; i < input.length; i++) {
        let microns = input[i]
        console.log(`Processing chunk ${microns} microns`)

        microns = doOperation(targetSize, microns, "Cut", cut)
        microns = doOperation(targetSize, microns, "Lap", lap)
        microns = doOperation(targetSize, microns, "Grind", grind)
        microns = doOperation(targetSize, microns, "Etch", etch)

        if (microns + 1 === targetSize) {
            microns = xRay(microns)
            console.log("X-ray x1")
        }

        console.log(`Finished crystal ${microns} microns`)
    }

    function cut(microns) {
        return microns / 4
    }

    function lap(microns) {
        return microns -= microns * 0.2
    }

    function grind(microns) {
        return microns -= 20
    }

    function etch(microns) {
        return microns -= 2
    }

    function xRay(microns) {
        return ++microns
    }

    function transportAndWash(microns) {
        console.log("Transporting and washing")
        return Math.floor(microns)
    }

    function doOperation(targetSize, microns, operationString, operation) {

        let count = 0
        let size = operation(microns)

        while (size >= targetSize || Math.floor(targetSize - size) === 1) {

            microns = size

            size = operation(size)

            count++
        }

        if (count > 0) {
            console.log(`${operationString} x${count}`)
            microns = transportAndWash(microns)
        }

        return microns
    }
}