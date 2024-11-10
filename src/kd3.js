// 3. Monetų skaičiuoklė
// • Parašykite funkciją, kuri klausinėtų „Ar norėtumėt monetos?“, ir reaguotų į
// atsakymą „Taip“ pridėdama po vieną monetą prie turimų monetų sumos ir
// išvesdama, kiek monetų turite. Jeigu į klausimą atsakote „Ne“ funkcija baigia
// darbą. Pradžioje turite 0 monetų. Panaudokite while loop. 


"use strict"



const addCoin = () => {

    let coinAmount = 0;

    while(true){
        const response = prompt(`Turite ${coinAmount} monetų.\nAr norėtumėte monetos? (Taip/Ne)`).trim();
        if (response === "Taip") {
            coinAmount += 1;
            console.log(`Jūs turite ${coinAmount} monetą/as.`); 
        } else if (response === "Ne"){
            console.log("Iki!");
            break;
        } else {
            alert("Prašome atsakyti 'Taip' arba 'Ne'.");
        }
    } 
   
}

console.log(addCoin());
 