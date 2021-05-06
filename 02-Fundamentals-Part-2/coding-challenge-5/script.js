'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);

console.log(dolphinsScore, koalasScore);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy. 🏆 (${avgDolphins}) vs (${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy. 🏆 (${avgKoalas}) vs (${avgDolphins})`);
    } else {
        console.log(`No teams wins... 😖`);
    }
}

checkWinner(dolphinsScore, koalasScore);

checkWinner(576, 111);

// Testing with other data
dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);

console.log(dolphinsScore, koalasScore);

checkWinner(dolphinsScore, koalasScore);