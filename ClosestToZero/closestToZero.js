function closestToZero(ts) {
  let ctz = 0;
  if (ts.length > 0) {
    ts.push(0);
    ts.sort((a, b) => a - b);
    let zeroIndx = ts.indexOf(0);
    let befZero = ts[zeroIndx - 1] || -Infinity;
    let aftZero = ts[zeroIndx + 1] || Infinity;

    if (Math.abs(0 - befZero) < Math.abs(0 - aftZero)) {
      ctz = befZero;
    } else {
      ctz = aftZero;
    }
  }
  return ctz;
}

console.log(closestToZero([-1.7, 8, 7, 6, -2, 9, -1.9, 4, -1.7])); //-1.7
