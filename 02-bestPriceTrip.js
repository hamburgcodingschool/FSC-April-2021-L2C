gasPricePerLiter = 1.5;
consumption = 8; // 8 liters for 100 km

kmDistance = 360;
tripCostCar = consumption * (kmDistance/100) * 1.5;
console.log("\nThe total price when going by car is " + tripCostCar + " €.\n");

priceTrainTicket = 68;

pricePerKmTrain = priceTrainTicket / kmDistance;
pricePerKmCar = gasPricePerLiter * consumption / 100;

console.log("The price per km when going by car is: " + pricePerKmCar.toFixed(2) + " €.\n");
console.log("The price per km when going by train is: " + pricePerKmTrain.toFixed(2) + " €.\n");