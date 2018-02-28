function solve(name, age, weight, height) {
    let personBmi = Math.round(weight / ((height / 100) * (height / 100)));
    let personStatus = getStatus();

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: personBmi,
        status: personStatus
    };

    if (personStatus === 'obese'){
        person.recommendation = 'admission required';
    }

    return person;

    function getStatus() {
        if(personBmi < 18.5){
            return 'underweight';
        } else if (personBmi >= 18.5 && personBmi < 25){
            return 'normal';
        } else if (personBmi >= 25 && personBmi < 30){
            return 'overweight';
        } else {
            return 'obese';
        }
    }
}

console.log(solve('Honey Boo Boo', 9, 57, 137))