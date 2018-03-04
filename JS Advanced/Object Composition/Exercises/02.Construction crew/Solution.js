function solve(obj) {
    if(!obj.handsShaking){
        return obj;
    }

    let weight = obj.weight;
    let experience = obj.experience;

    obj.bloodAlcoholLevel += 0.1 * weight * experience;
    obj.handsShaking = false;

    return obj;
}

console.log(solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));