function solution(input) {
    let gladiators = {};

    for (let tokens of input) {
        if (tokens === 'Ave Cesar') {
            break;
        }

        if (tokens.indexOf('-') > -1) {
            let gladiatorTokens = tokens.split(' -> ');
            let gladiator = gladiatorTokens[0];
            let technique = gladiatorTokens[1];
            let skill = Number(gladiatorTokens[2]);

            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {
                    totalSkillPoints: 0,
                    techniques: {}
                };
            }

            if (!gladiators[gladiator].techniques.hasOwnProperty(technique)) {
                gladiators[gladiator].techniques[technique] = skill;
                gladiators[gladiator].totalSkillPoints += skill;
            } else {
                if (gladiators[gladiator].techniques[technique] < skill){
                    gladiators[gladiator].totalSkillPoints -= gladiators[gladiator].techniques[technique];
                    gladiators[gladiator].techniques[technique] = skill;
                    gladiators[gladiator].totalSkillPoints += skill;
                }
            }
        } else {
            let gladiatorTokens = tokens.split(' vs ');
            let gladiatorOne = gladiatorTokens[0];
            let gladiatorTwo = gladiatorTokens[1];

            if (gladiators.hasOwnProperty(gladiatorOne) && gladiators.hasOwnProperty(gladiatorTwo)){
                let gladOneTechniques = Object.keys(gladiators[gladiatorOne].techniques);
                let gladTwoTechniques = Object.keys(gladiators[gladiatorTwo].techniques);

                let common = 0;

                for (let tech of gladOneTechniques) {
                    if (gladTwoTechniques.indexOf(tech) > -1) {
                        common++;
                    }
                }

                if (common > 0){
                    let gladOnePts = gladiators[gladiatorOne].totalSkillPoints;
                    let gladTwoPts = gladiators[gladiatorTwo].totalSkillPoints;

                    if (gladOnePts > gladTwoPts){
                        delete gladiators[gladiatorTwo];
                    } else if (gladOnePts < gladTwoPts){
                        delete gladiators[gladiatorOne];
                    }
                }
            }
        }
    }

    let currentArr = Object.entries(gladiators);
    let sortGladiatorsBySkillPoints = sortBySkillPts(currentArr);

    for (let glad of sortGladiatorsBySkillPoints) {
        let gladName = glad[0];
        let totalSkillPoints = glad[1].totalSkillPoints;

        console.log(`${gladName}: ${totalSkillPoints} skill`);

        let techniques = glad[1].techniques;

        let sortedTechniques = [];
        for (let tech in techniques) {
            sortedTechniques.push([tech, techniques[tech]]);
        }

        sortedTechniques.sort(function(a, b) {
            if (a[1] !== b[1]){
                return b[1] - a[1];
            } else {
                return a[0] > b[0];
            }
        });

        for (let obj of sortedTechniques) {
            let techniqueName = obj[0];
            let techniqueSkill = obj[1];

            console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
        }
    }

    function sortBySkillPts(arr) {
        arr.sort(function (a, b) {
            if (a[1].totalSkillPoints !== b[1].totalSkillPoints) {
                return b[1].totalSkillPoints - a[1].totalSkillPoints;
            } else {
                return a[0] > b[0];
            }
        });

        return arr;
    }
}

solution(['Pesho -> BattleCry -> 400',
'Gosho -> PowerPunch -> 300',
'Stamat -> Duck -> 200',
'Stamat -> Tiger -> 250',
'Ave Cesar'])