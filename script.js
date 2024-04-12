const nameArray = []; // Create a list to store names

function addName () {
  // Get a trimmed version of the name from the input box
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();

  if (name === "") {
    const warning = document.getElementById("warning");
    warning.textContent = "Please enter a name";
  } else {
    nameArray.push(name);
    displayNames();
    nameInput.value = '';
    const warning = document.getElementById("warning");
    warning.textContent = "";
  }
}

function displayNames(){
    const nameList = document.getElementById('nameList'); // Get UL element 
    nameList.innerHTML = ''; // Clear the list 

    for (let i = 0; i < nameArray.length; i++){
        const name = nameArray[i]; // Get the current name from the array

        const li = document.createElement('li');
        li.className = 'list-group-item';

        const span = document.createElement('span');
        span.textContent = name;

        li.appendChild(span);
        nameList.appendChild(li);
    }
}

function pickRandomName () {
  const randomNameDiv = document.getElementById('randomName');
  randomNameDiv.textContent = '';

  if (nameArray.length === 0) {
    randomNameDiv.textContent = 'No names available';
  } else {
    const randomNumber = Math.floor(Math.random() * nameArray.length);
    const randomName = nameArray[randomNumber];

    randomNameDiv.textContent = randomName;

    nameArray.splice(randomNumber, 1);
    displayNames();
  }
}

// Add onclick to add name btn
document.getElementById('addNameBtn').addEventListener('click', addName);

// Add onclick to add name btn
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName);
