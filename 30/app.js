var employee = ["admin", "ahsen", "hasnain"];
for (var i = 0; i < employee.length; i++) {
    if (employee[i] == "admin") {
        (console.log("a hello admin, would you like to ee a status report?"));
    }
    else {
        console.log("hello ".concat(employee[i]));
    }
}
