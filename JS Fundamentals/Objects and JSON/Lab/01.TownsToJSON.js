function townsToJSON(input) {
    let towns = []

    for (let town of input.slice(1)) {
        let [townName, lat, lng] = town.split(/\s*\|\s*/)
            .filter(x => x !== "")

        let townObj = {
            Town: townName,
            Latitude: Number(lat),
            Longitude: Number(lng)
        }

        towns.push(townObj)
    }

    console.log(JSON.stringify(towns))
}