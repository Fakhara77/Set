//Remove an element from a set
const countries = ['Finland', 'Sweden', 'Norway']
 setofcountries= new Set(countries);
for(const country of countries){
setofcountries.delete('Sweden')
};
console.log(setofcountries);
