// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(`Mark's BMI is: ${markBMI}, John's BMI is: ${johnBMI}`);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);