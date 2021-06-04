hostelPerNight = 20;
tripDuration = 5;
breakfastCost = 6.5;

accomodationCost = hostelPerNight * tripDuration;
totalCost = (hostelPerNight + breakfastCost) * tripDuration;
console.log("The Cost for the accomodation including the breakfast is " 
    + totalCost + " € for " + tripDuration + " nights.");