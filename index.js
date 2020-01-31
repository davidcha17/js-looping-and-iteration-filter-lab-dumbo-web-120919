// Code your solution in this file

const drivers = [
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


function findMatching(driversArray, driver){
    return driversArray.filter(function (anything){
        return anything.toLowerCase() === driver.toLowerCase();
    })
}

function fuzzyMatch(list, partialName){
    let length = partialName.length;
    return list.filter(function (driversName){
        return driversName.slice(0, length) === partialName;
    })
}

function matchName(list, name){
    return list.filter(function (driver){
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}
  

