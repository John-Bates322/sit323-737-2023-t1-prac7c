const express = require('express');
const app = express();
// Define the port the app will listen on
const port = 3000;

// Define a route to handle addition requests
app.get('/add/:num1/:num2', (req, res) => {
  // Parse the input numbers from the request parameters
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  // Check that the input is valid and send an error message if not
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Please provide valid numbers');
  } else{
    // Perform the addition operation and send the result
    const result = num1 + num2;
    res.send(result.toString());
  }
});

// Define a route to handle subtraction requests
app.get('/subtract/:num1/:num2', (req, res) => {
  // Parse the input numbers from the request parameters
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  // Check that the input is valid and send an error message if not
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Please provide valid numbers');
  } else{
    // Perform the subtraction operation and send the result
    const result = num1 - num2;
    res.send(result.toString());
  }
});

// Define a route to handle multiplication requests
app.get('/multiply/:num1/:num2', (req, res) => {
  // Parse the input numbers from the request parameters
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  // Check that the input is valid and send an error message if not
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Please provide valid numbers');
  } else{
    // Perform the multiplication operation and send the result
    const result = num1 * num2;
    res.send(result.toString());
  }
});

// Define a route to handle division requests
app.get('/divide/:num1/:num2', (req, res) => {
  // Parse the input numbers from the request parameters
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  // Check that the divisor is not zero and the input is valid
  if (num2 === 0) {
    res.status(400).send('Cannot divide by zero');
  } else if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Please provide valid numbers');
  } else {
    // Perform the division operation and send the result
    const result = num1 / num2;
    res.send(result.toString());
  }
});

// Start the app listening on the specified port
app.listen(port, () => {
  console.log(`Calculator microservice listening at http://localhost:${port}`);
});
