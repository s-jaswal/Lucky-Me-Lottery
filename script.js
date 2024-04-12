// Create a list to store names
const nameArray = [];

// Function to add a name
function addName () {
  // Get a trimmed version of the name from the input box
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();

  // Check if the input is empty
  if (name === "") {
    // If input is empty, display a warning message
    const warning = document.getElementById("warning");
    warning.textContent = "Please enter a name";
  } else {
    // If input is not empty, add the name to the array and display it
    nameArray.push(name);
    displayNames();
    nameInput.value = '';
    const warning = document.getElementById("warning");
    warning.textContent = "";
  }
}

// Function to display names
function displayNames(){
    // Get UL element 
    const nameList = document.getElementById('nameList');
    // Clear the list 
    nameList.innerHTML = '';

    // Loop through the name array and create list items for each name
    for (let i = 0; i < nameArray.length; i++){
        // Get the current name from the array
        const name = nameArray[i];

        // Create a list item
        const li = document.createElement('li');
        li.className = 'list-group-item';

        // Create a span element to display the name
        const span = document.createElement('span');
        span.textContent = name;

        // Append the span to the list item and the list item to the UL element
        li.appendChild(span);
        nameList.appendChild(li);
    }
}

// Function to pick a random name
function pickRandomName () {
  // Get the div element where the random name will be displayed
  const randomNameDiv = document.getElementById('randomName');
  randomNameDiv.textContent = '';

  // Check if there are names available
  if (nameArray.length === 0) {
    // If no names available, display a message
    randomNameDiv.textContent = 'No names available';
  } else {
    // If names are available, pick a random name
    const randomNumber = Math.floor(Math.random() * nameArray.length);
    const randomName = nameArray[randomNumber];

    // Display the random name
    randomNameDiv.textContent = randomName;

    // Remove the picked name from the array and display the updated list of names
    nameArray.splice(randomNumber, 1);
    displayNames();
  }
}

// Add onclick event listener to the add name button
document.getElementById('addNameBtn').addEventListener('click', addName);

// Add onclick event listener to the pick random name button
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName);
