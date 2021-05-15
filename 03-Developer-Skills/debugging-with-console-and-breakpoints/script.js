const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degrees celsius:'),
    value: 10
  };

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());


// Using a debugger
const calcTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) {
      max = temps[i];
    } else if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);