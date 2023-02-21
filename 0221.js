const ages = [20, 28, 19, 56];
const newAges = [];

ages.forEach(function () {
  newAges.push(ages + 5);
});

console.log(newAges);
