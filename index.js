const returnFirstTwoDrivers = function (drivers){
 return drivers.slice(0,2);
}

const drivers = ["Tod", "Bob", "Joe", "Doug"]



///////////////////////////////

const returnLastTwoDrivers = function (someDrivers){
    return someDrivers.slice(-2);
}

const someDrivers = ["Tod", "Bob", "Joe", "Doug"]

///////////////////////////////

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

///////////////////////////////



function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

///////////////////////////////

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}


function selectDifferentDrivers(arrayOfDrivers, returnFunction){
    if (returnFunction === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);
    }else if (returnFunction === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}