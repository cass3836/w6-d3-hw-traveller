const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) =>
    journey.startLocation
  );
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) =>
    journey.endLocation
  );
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) =>
    journey.transport === transport
  );
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) =>
    journey.distance > minDistance
  );
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = [];
  this.journeys.map((journey) =>
    distances.push(journey.distance)
  );
// console.log(distances);
return distances.reduce((total, number) =>
  total + number, 0)
 };

//
// const sumElements = function (numbers) {
//   const total = numbers.reduce((runningTotal, number) => {
//     return runningTotal + number;
//   }, 0); // MODIFIED
//
//   return total;
// }

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
