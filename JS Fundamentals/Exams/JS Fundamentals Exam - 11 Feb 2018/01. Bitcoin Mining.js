function bitcoinMining(input) {
    let bitcoinMultiplier = 11949.16;
    let goldMultiplier = 67.51;
    let totalBitcoins = 0;
    let currentMoney = 0;

    let firstDay = 0;

    for (let i = 0; i < input.length; i++) {
        let currentGoldG = input[i];

        if ((i + 1) % 3 === 0){
            currentGoldG -= currentGoldG * 0.3;
        }

        currentMoney += currentGoldG * goldMultiplier;
        let currentBoughtBitcoins = 0;

        if (currentMoney >= bitcoinMultiplier){
            currentBoughtBitcoins += Math.floor(currentMoney / bitcoinMultiplier);
            currentMoney -= currentBoughtBitcoins * bitcoinMultiplier;

            if (firstDay === 0){
                firstDay = i + 1;
            }
        }

        totalBitcoins += currentBoughtBitcoins;
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);