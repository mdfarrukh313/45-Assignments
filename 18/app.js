var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
console.log("original order:", placesToVisit);
// printing alphabetical order
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// show that array is still in its original order
console.log("original order after sorting:", placesToVisit);
// printing the array in reverse alphabetical order without chaining the order 
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placesToVisit);
