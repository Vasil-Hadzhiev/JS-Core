function solve(carObj) {
    let engineType = 'small';

    if(carObj.power <= 120 && carObj.power > 90){
        engineType = 'normal';
    }

    if(carObj.power > 120){
        engineType = 'monster';
    }

    let power = 0;
    let volume = 0;
    let type = carObj.carriage;
    let color = carObj.color;
    let wheelsize = carObj.wheelsize % 2 === 0 ? carObj.wheelsize - 1 : carObj.wheelsize;
    let wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    if(engineType === 'small'){
        power = 90;
        volume = 1800;
    } else if (engineType === 'normal'){
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    let model = carObj.model;

    let resultCar = {
        model: model,
        engine : {
            power: power,
            volume: volume
        },
        carriage: {
            type: type,
            color: color
        },
        wheels: wheels
    };

    return resultCar;
}

console.log(solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
))