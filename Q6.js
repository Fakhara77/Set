//Create a map of countries and number of characters of a country

const countries = [
  ["Finland", "Sweden"],
  ["norway", "france"],
];
counts=[];
count={};

const countriesmap = new Map();
for(const country of countriesmap){
counts.push({country, count:countriesmap.CharAt(country[0])})
}
console.log(counts);
console.log(countriesmap.set("norway", "france"));
console.log(countriesmap.set("Finland", "Sweden"));
console.log(countriesmap.size);

