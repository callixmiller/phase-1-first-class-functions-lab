const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers() {
    return drivers.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function () {
        return fare*fare;
    }
}

function fareDoubler(fare2) {
    return fare2*2;
}

function fareTripler(fare3) {
    return fare3*3;
}

function selectDifferentDrivers(selectingDrivers, drivers) {
    return drivers(selectingDrivers);
}