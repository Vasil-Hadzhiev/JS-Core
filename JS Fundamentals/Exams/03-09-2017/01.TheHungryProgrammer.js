function solve(food, commands) {
    let mealsEaten = 0

    for (let input of commands) {
        let tokens = input.split(" ")
        let command = tokens[0]

        if(command === "End"){
            break
        }

        if(food.length === 0 && command !== "Add"){
            continue
        }

        if(command === "Serve"){
            let foodToServe = food.pop()
            console.log(`${foodToServe} served!`)

        } else if (command === "Add"){
            let mealToAdd = tokens[1]

            if(mealToAdd === undefined){
                break
            }

            food.unshift(mealToAdd)
        } else if (command === "Shift"){
            let indexA = Number(tokens[1])
            let indexB = Number(tokens[2])

            if(indexA >= food.length || indexA < 0){
                continue
            }

            if(indexB >= food.length || indexB < 0){
                continue
            }

            let mealA = food[indexA]
            let mealB = food[indexB]
            food[indexA] = mealB
            food[indexB] = mealA
        } else if (command === "Eat"){
            let mealToEat = food.shift()
            mealsEaten++
            console.log(`${mealToEat} eaten`)
        } else if (command === "Consume") {
            let startIndex = Number(tokens[1])
            let endIndex = Number(tokens[2])

            if(startIndex >= food.length || startIndex < 0){
                continue
            }

            if(endIndex >= food.length || endIndex < 0){
                continue
            }

            if(startIndex >= endIndex){
                continue
            }

            mealsEaten += endIndex - startIndex + 1
            food.splice(startIndex, endIndex - startIndex + 1)
            console.log("Burp!")
        }
    }

    if(food.length > 0){
        console.log(`Meals left: ${food.join(", ")}`)
    } else {
        console.log("The food is gone")
    }

    console.log(`Meals eaten: ${mealsEaten}`)
}