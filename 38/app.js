// Define the function describe_city with a default parameter for country
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    // Print a simple sentence describing the city and its country
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function describe_city for three different cities
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'USA');
