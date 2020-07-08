function phAnalyzer(pH) {
  if ((pH >= 1) && (pH <= 6)) {
    console.log('acidic');
  } else if (pH === 7) {
    console.log('neutral');
  } else if ((pH >= 8) && (pH <= 14)) {
    console.log('Alkaline');
  } else {
    console.log('invalid pH value');
  }
}

console.log(phAnalyzer(3));
console.log(phAnalyzer(7));
console.log(phAnalyzer(10));
console.log(phAnalyzer(15));
