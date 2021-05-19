// Operators

// Assignment operator
a=10;

// Mathematical operators
// sum +

trainTicketToFreiburg = 45;
busTicketToHbf = 3;

console.log(trainTicketToFreiburg + busTicketToHbf + 10);
sum = trainTicketToFreiburg + busTicketToHbf;
console.log(sum)

// this is surprising
console.log("The train ticket costs " + trainTicketToFreiburg + busTicketToHbf);
console.log("45"+"3")

// this is expected
console.log("The train ticket costs " + sum);
console.log("!!!The train ticket costs " + (trainTicketToFreiburg + busTicketToHbf));


// difference -

// E4.
// a. Create a variable to store the price of a ICE ticket;
// b. Create a variable to store the price of a Regio ticket;
// c. Print the difference between the two prices;
// d. Print the difference within a sentence ("The difference is: 35 EUR")

iceTicket=89;
regioTicket=45;
console.log((iceTicket-regioTicket));
console.log("The difference is: " + (iceTicket-regioTicket) + " EUR");

// multiplication * 

hostelPerNight = 20;
tripDuration = 5;

accomodationCost = hostelPerNight * tripDuration;
console.log(accomodationCost);


// division /

totalBudget = 300;
campingPerNight = 7;
hostelPerNight = 25;

// E6.
// Start with a predefined budget variable
// a. Create 2 more variables to store the cost of one night in a hotel and the cost of one night in camping
// b. Calculate what is the maximum number of nights you can stay in your trip
// c. Print out the results

maxNightsCamping = Math.round(totalBudget / campingPerNight);
maxNightsHostel = Math.round(totalBudget / hostelPerNight);
maxNightsHotel = Math.round(totalBudget / hotelPerNight);

console.log("We can stay for maximum " + maxNightsCamping + " nights if we go camping");
console.log("We can stay for maximum " + maxNightsHostel + " nights if we go to a hostel");
console.log("We can stay for maximum " + maxNightsHotel + " nights if we go to a hotel");