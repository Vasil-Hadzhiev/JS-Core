function getHeroInfo(input) {
    let heroes = []

    for (let str of input) {
        let heroTokens = str.split(" / ")
        let name = heroTokens[0]
        let level = Number(heroTokens[1])
        let items = []
        if (heroTokens.length > 2) {
            items = heroTokens[2].split(", ")
                .filter(x => x !== "")
        }

        let newHero = {
            name: name,
            level: level,
            items: items
        }

        heroes.push(newHero)
    }

    console.log(JSON.stringify(heroes))
}