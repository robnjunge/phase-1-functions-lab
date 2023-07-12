// Code your solution in this file!
let distanceFromHq;
let hq = 42;
let distance;

function distanceFromHqInBlocks(distanceFromHq) {
    distance = Math.abs(distanceFromHq - hq)
    return distance;
}

function   distanceFromHqInFeet(distanceFromHq) {
    return distanceFromHqInBlocks(distanceFromHq) * 264;
}

function distanceTravelledInFeet(start, destination) {
     distance = Math.abs(start - destination)* 264;
     return distance;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000 ) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}