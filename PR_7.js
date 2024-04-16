
function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}


function PiMultiplier(number) {
  return function() {
    return Math.PI * number;
  };
}


function Painter(color) {
  return function(obj) {
    if (obj && obj.type) {
      console.log(`Color: ${color}, Type: ${obj.type}`);
    } else {
      console.log("No 'type' property occurred!");
    }
  };
}


const PaintBlue = Painter("blue");


const PaintRed = Painter("red");


const PaintYellow = Painter("yellow");




const object1 = { maxSpeed: 280, type: "Truck" };
const object2 = { maxSpeed: 180, type: "Sportcar", avgSpeed: 90, color: "purple" };
const object3 = { color: "magenta", loadCapacity: 2400, isCar: true };


PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);


const PiMultiplyBy2 = PiMultiplier(2);
const PiMultiplyBy3_2 = PiMultiplier(3 / 2);
const PiDivideBy2 = PiMultiplier(1 / 2);

console.log(PiMultiplyBy2());
console.log(PiMultiplyBy3_2());
console.log(PiDivideBy2());
