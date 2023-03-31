// Code your solution here
const name = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(name, string) {
    return name.filter(name => name.toLowerCase() === string.toLowerCase());
  }

  
function fuzzyMatch(names, string) {
    return names.filter(function(name) {
      return name.startsWith(string);
    });
  }

  const name2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  function matchName(name2, string) {
    return name2.filter(name2 => name2.name === string);
  }