let placesToVisit: string[]= ["Tokyo", "Pakistan","America","China","Japan"];
console.log("original order:", placesToVisit);
// printing alphabetical order
console.log("Alphabetical order:",[...placesToVisit].sort());
// show that array is still in its original order
console.log("original order after sorting:", placesToVisit);
// printing the array in reverse alphabetical order without chaining the order 
console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());
// show that the array is still in its original order
console.log("original order after reverse sorting:", placesToVisit);
//Reverse the order of the list 
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// rEVERSE THE ORDER OF THE LIST AGAIN TO GET BACK TO THE ORIGINAL ORDER 
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
//short the array in alphabetical onder 
placesToVisit.sort();
console.log("sorted in alphabetical order:", placesToVisit);
// sort the array in reverse alphabetical order
placesToVisit.sort ((a,b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:",placesToVisit);