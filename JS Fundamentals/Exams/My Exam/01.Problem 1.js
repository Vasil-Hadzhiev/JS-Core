function solution(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        let isHelmetBroken = false;
        let isSwordBroken = false;
        let isShieldBroken = false;

        if (i % 2 === 0){
            isHelmetBroken = true;
            helmetCount++;
        }

        if (i % 3 === 0){
            isSwordBroken = true;
            swordCount++;
        }

        if (isHelmetBroken && isSwordBroken){
            isShieldBroken = true;
            shieldCount++;
        }

        if (shieldCount % 2 === 0 && shieldCount !== 0 && isShieldBroken){
            armorCount++;
        }
    }



    let expenses = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armorCount * armorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solution(23, 12.50, 21.50, 40, 200);