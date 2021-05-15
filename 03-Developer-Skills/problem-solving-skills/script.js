// Problem 1
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// What's a sensor error? And what to do when one occurs?

// 2) Breaking up into sub-problems
// - How to ignore sensor error?
// - Find max value in temperature array
// - Find min value in temperature array
// - Substract min from max (amplitude) and return it

const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) {
      max = temps[i];
    } else if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max);
  console.log(min);

  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);


// Problem 2
// Function should now  receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
    // - How to merge 2 arrays


const calcTempAmplitudeNew = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) {
      max = temps[i];
    } else if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max);
  console.log(min);

  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);