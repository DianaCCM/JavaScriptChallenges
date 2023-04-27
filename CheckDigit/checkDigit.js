function createCheckDigit(membershipId) {
  let num = sum(membershipId);
  while (num.toString().length > 1) {
    num = sum(num);
  }
  return num;
}

const sum = (val) => {
  let sumNums = 0;
  for (n of val.toString()) {
    sumNums += Number(n);
  }
  return sumNums;
};

console.log(createCheckDigit("55555"));
