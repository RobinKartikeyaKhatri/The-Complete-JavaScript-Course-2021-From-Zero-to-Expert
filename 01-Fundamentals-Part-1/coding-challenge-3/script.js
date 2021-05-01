// const dolphinsAvgScore = (96 + 108 + 89) / 3;
// const koalasAvgScore = (88 + 91 + 110) / 3;

// console.log(`Dolphins average score is: ${dolphinsAvgScore} and Koalas average score is: ${koalasAvgScore}`);

// if (dolphinsAvgScore > koalasAvgScore) {
//     console.log(`Dolphins win the trophy 🏆`);
// } else if (koalasAvgScore > dolphinsAvgScore) {
//     console.log(`koalas win the trophy 🏆`);
// } else if (dolphinsAvgScore === koalasAvgScore) {
//     console.log(`Both win the trophy 📍`);
// }



// Bonus 1

const dolphinsAvgScore = (97 + 112 + 80) / 3;
const koalasAvgScore = (109 + 95 + 50) / 3;

console.log(`Dolphins average score is: ${dolphinsAvgScore} and Koalas average score is: ${koalasAvgScore}`);

if ((dolphinsAvgScore > koalasAvgScore) && (dolphinsAvgScore >= 100)) {
    console.log(`Dolphins win the trophy 🏆`);
} else if ((koalasAvgScore > dolphinsAvgScore) && (koalasAvgScore >= 100)) {
    console.log(`koalas win the trophy 🏆`);
} else if ((dolphinsAvgScore === koalasAvgScore) && (dolphinsAvgScore >= 100 && koalasAvgScore >= 100)) {
    console.log(`Both win the trophy 📍`);
} else {
    console.log(`No one wins the trophy! 😭`);
}