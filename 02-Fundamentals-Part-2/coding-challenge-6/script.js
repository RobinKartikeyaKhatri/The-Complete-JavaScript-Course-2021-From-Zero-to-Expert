const calculateTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];

const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);