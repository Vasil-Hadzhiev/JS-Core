function gameOfEpicness(data, battles) {
    let kingdoms = {};

    for (let kingdom of data) {
        let currentKingdom = kingdom.kingdom;
        let currentGeneral = kingdom.general;
        let currentArmyCount = kingdom.army;

        if (!kingdoms.hasOwnProperty(currentKingdom)){
            kingdoms[currentKingdom] = {
                wins: 0,
                losses: 0
            };
        }

        if (!kingdoms[currentKingdom].hasOwnProperty(currentGeneral)){
            kingdoms[currentKingdom][currentGeneral] = {
                army: 0,
                wins: 0,
                losses: 0
            };
        }

        kingdoms[currentKingdom][currentGeneral].army += currentArmyCount;
    }

    for (let battle of battles) {
        let aK = battle[0];
        let aG = battle[1];
        let dK = battle[2];
        let dG = battle[3];

        if (aK === dK){
            continue;
        }

        let aA = kingdoms[aK][aG].army;
        let dA = kingdoms[dK][dG].army;

        if (aA > dA){
            kingdoms[aK].wins++;
            kingdoms[aK][aG].wins++;
            kingdoms[dK].losses++;
            kingdoms[dK][dG].losses++;

            kingdoms[aK][aG].army += kingdoms[aK][aG].army * 0.1;
            kingdoms[dK][dG].army -= kingdoms[dK][dG].army * 0.1;
        } else if (aA < dA){
            kingdoms[dK].wins++;
            kingdoms[dK][dG].wins++;
            kingdoms[aK].losses++;
            kingdoms[aK][aG].losses++;

            kingdoms[dK][dG].army += kingdoms[dK][dG].army * 0.1;
            kingdoms[aK][aG].army -= kingdoms[aK][aG].army * 0.1;

        } else {
            continue;
        }

        kingdoms[aK][aG].army = Math.floor(kingdoms[aK][aG].army)
        kingdoms[dK][dG].army = Math.floor(kingdoms[dK][dG].army);
    }

    let currentArr = Object.entries(kingdoms);
    let sortedKingdoms = sortResults(currentArr);
    let winnerKingdom = sortedKingdoms[0];
    let generals = winnerKingdom[1];
    generals = Object.entries(generals).splice(2);
    generals.sort((a, b) => b[1].army - a[1].army);

    console.log(`Winner: ${winnerKingdom[0]}`);

    for (let general of generals) {
        console.log(`/\\general: ${general[0]}`);
        console.log(`---army: ${general[1].army}`);
        console.log(`---wins: ${general[1].wins}`);
        console.log(`---losses: ${general[1].losses}`);
    }

    function sortResults(arr) {
        arr.sort(function (a, b) {
            if (a[1].wins !== b[1].wins){
                return b[1].wins - a[1].wins;
            } else {
                if (a[1].losses !== b[1].losses) {
                    return a[1].losses - b[1].losses;
                } else {
                    return a[0] > b[0];
                }
            }
        });

        return arr;
    }
}

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)