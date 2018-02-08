function systemComponents(input) {
    let systems = new Map()

    for (let str of input) {
        let tokens = str.split(" | ")
        let system = tokens[0]
        let component = tokens[1]
        let subcomponent = tokens[2]

        if(!systems.has(system)){
            systems.set(system, new Map())
        }

        if(!systems.get(system).has(component)){
            systems.get(system).set(component, [])
        }

        systems.get(system).get(component).push(subcomponent)
    }

    let sortedSystems = Array.from(systems.keys()).sort((a, b) => sortSystems(a, b))

    for (let system of sortedSystems) {
        console.log(system)
        let sortedComponents = Array.from(systems.get(system).keys()).sort((a, b) => sortComponents(system, a, b))

        for (let comp of sortedComponents) {
            let subcomponents = systems.get(system).get(comp)
            console.log(`|||${comp}`)
            for (let subcomp of subcomponents) {
                console.log(`||||||${subcomp}`)
            }
        }
    }

    function sortSystems(a, b) {
        if(systems.get(a).size !== systems.get(b).size){
            return systems.get(b).size - systems.get(a).size
        }

        return a > b
    }

    function sortComponents(system, a, b) {
        return systems.get(system).get(b).length - systems.get(system).get(a).length
    }
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])