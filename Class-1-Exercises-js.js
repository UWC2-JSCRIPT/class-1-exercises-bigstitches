/**
 * MATH
 */

//var testjs = 8;
//document.getElementById("testjs").innerHTML = testjs;

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
var smallPizzaArea = Math.PI * 13/2;
document.getElementById("smallPizza").innerHTML = smallPizzaArea;
var largePizzaArea = Math.PI * 17/2;
document.getElementById("largePizza").innerHTML = largePizzaArea;


// 2. What is the cost per square inch of each pizza?
var smallPizzaCost = 16.99/smallPizzaArea;
document.getElementById("smallCost").innerHTML = smallPizzaCost.toFixed(2);
var largePizzaCost = 19.99/largePizzaArea;
document.getElementById("largeCost").innerHTML = largePizzaCost.toFixed(2);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
function drawCard()
    {
        return 1 + Math.floor(Math.random()*13);
    }

// 4. Draw 3 cards and use Math to determine the highest
// card
var firstDraw = drawCard();
var secondDraw = drawCard();
var thirdDraw = drawCard();
var biggestDraw = Math.max(firstDraw, secondDraw, thirdDraw);
document.getElementById("idoneDraw").innerHTML = firstDraw;
document.getElementById("idtwoDraw").innerHTML = secondDraw;
document.getElementById("idthreeDraw").innerHTML = thirdDraw;
document.getElementById("idbigDraw").innerHTML = biggestDraw;

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
var firstName = String;
var lastName = String;
var streetAddress = String;
var city = String;
var state = String;
var zipCode = String;

let formatAddress = (fN, lN, sA, c, s, zC) =>
{
  firstName = fN;
  lastName = lN;
  streetAddress = sA;
  city = c;
  state = s;
  zipCode = zC;
  const addressString = `${firstName} ${lastName}<br>${streetAddress}<br>${city}, ${state} ${zipCode}`;
  document.getElementById("idformatAddress").innerHTML = addressString;
  console.log(firstName + " " + lastName + "\n" + streetAddress + "\n" + city + ", " + state + "\n" + zipCode);
  return firstName + " " + lastName + '<br>' + streetAddress + '<br>' + city + ", " + state + " " + zipCode;
  
}

//test
formatAddress('John', 'Doe', '5988 33rd ave SW', 'Seattle','WA', 98006);


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
//
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let addressFormat = formatAddress('firstName', 'lastName', '4003 22nd ave NW', 'Portland', 'OR', '69003');
var addressArray = String(addressFormat).split(' ');
let extractFirstName = addressArray[0];
console.log(addressArray[0]);


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// const endDate = new Date(2019, 3, 1);
const beginningDate = new Date(2020, 1, 1, 0, 0, 0);
const endDate = new Date(2020, 4, 1, 0, 0, 0);
var midDate = new Date((endDate.getTime() + beginningDate.getTime())/2);
document.getElementById("middleDate").innerHTML = midDate;
console.log(midDate);