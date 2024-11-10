// 2. Random Exercise Generator
// • Sukurkite masyvą iš žemiau išvardintų elementų (pratimų pavadinimų).
// • Parašykite funkciją (arrow) kuri priimtų skačių ir grąžintų nurodytą skaičių
// atsitiktinių pratimų iš masyvo. Funkcijos rezultatą atspausdinti konsolėje.
// • Funkcija turi pranešti, jei paduotas skaičius yra didesnis arba mažesnis nei
// masyve esančių elementų skaičius ir nutraukti darbą.
// Array items:
// Push-ups, Sit-ups, Bear Crawls, 1 mile run, 60 second plank, Burpees, Jumping
// Jacks, Squats, Weighted Squats, Inch Worms


const exercises = [
    "Push-ups",
    "Sit-ups",
    "Bear Crawls",
    "1 mile run",
    "60 second plank",
    "Burpees",
    "Jumping Jacks",
    "Squats",
    "Weighted Squats",
    "Inch Worms"
];

const count = +prompt("Enter a random exercise number:");

const randomExcerciseGenerator = (count) => {
if (isNaN(count) || count < 1 || count > exercises.length){
    alert("Please provide a number between 1 and " + exercises.length);
    return;
  
}
const selectedExercises = [];

while (selectedExercises.length < count){
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const exercise = exercises[randomIndex];

    if (!selectedExercises.includes(exercise)) {
        selectedExercises.push(exercise);
      }
}
return selectedExercises;
}

console.log(`Random exercises: ${randomExcerciseGenerator(count).join("\n")}`);