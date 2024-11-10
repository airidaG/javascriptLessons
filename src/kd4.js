// 4. Duotas vardų masyvas.
// let names = ["Olivia ", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];
//  Parašykite funkciją, kuri pašalina Olivia.
//  Parašykite funkciją, kuri prideda vardą Mason į priekį.
//  Į masyvo pabaigą pridėkite savo vardą.
//  Parašykte funkciją, kuri priima vardą ir jį pašalina iš masyvo.
//  Sukurkite masyvą withBob ir sudėkite ten vardus, kiekvienas vardas turėtų būti sujungtas su
// ‘withBob’, pvz. OliviawithBob, JacksonwithBob.
//  Išrikiuokite vardus nuo Z iki A.
// !! Visos parašytos funkcijos turi priimti originalų masyvą, jį pakeisti, arba iš jo sukurti naują ir
// grąžinti.

"use strict"

// 4. Duotas vardų masyvas.
//  Parašykite funkciją, kuri pašalina Olivia.
// -----------------------------------
// let names = ["Olivia ", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];

// const removeOlivia = () => {
//     names.splice(0, 1);
//     return names;
// }

// console.log(removeOlivia());
// ----------------------------------

// const removeOlivia = (names) => {
//     const index = names.indexOf("Olivia");
//     if (index !== -1) {
//         names.splice(index, 1); //when location of the value in uncertain
//     }
//     return names;
// }

// console.log(removeOlivia(names));

// ==================================

//  Parašykite funkciją, kuri prideda vardą Mason į priekį.

// let names = ["Olivia ", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];

// const addMason = (names) => {
//     names.splice(0, 0, "Mason");
//     return names;
// }

// console.log(addMason(names));

// =======================================

//  Į masyvo pabaigą pridėkite savo vardą.

// let names = ["Olivia ", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];

// const addMyName = (names) =>{
//     names.push("Airida");
//     return names;
// }

// console.log(addMyName(names));

// ========================================


//  Parašykte funkciją, kuri priima vardą ir jį pašalina iš masyvo.

// let names = ["Olivia", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];

// const removeGivenName = (names) => {

//     const nameToRemove = prompt("What name to remove?");

//         const index = names.indexOf(nameToRemove);
//         if (index !== -1) {
//             names.splice(index, 1);
//             alert(`${nameToRemove} has been removed.`);
//         }
//         else {
//             alert("Name not found");
//         } //do...while (index === -1);
//         return names;
//     }

//     console.log(removeGivenName(names));
    

//     ==========================================
//     Sukurkite masyvą withBob ir sudėkite ten vardus, kiekvienas vardas turėtų būti sujungtas su
//     // ‘withBob’, pvz. OliviawithBob, JacksonwithBob.

// let names = ["Olivia", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];



// const addWithBob = (names) => {
//     return names + "withBob";
// }

// let withBob = names.map(addWithBob);

// console.log(withBob);

// ===================================================

//  Išrikiuokite vardus nuo Z iki A.

let names = ["Olivia", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella" ];

names.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

console.log(names);




