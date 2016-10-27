// String Templates
var port = 10;
var environment = "Dev"



//Simple Form
console.log("Server is running on the port: " + port + " & " + environment + " Environment");

//String interpolations
console.log("Server is running on the port: %d & %s Environment", port, environment );

// ES6 Solution
console.log(`Server is running on the port: ${port} & ${environment} Environment`);