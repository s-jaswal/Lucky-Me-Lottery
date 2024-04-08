<<<<<<< HEAD
const nameArray = [] //Create a list to store names

function addName () {
  //get a trimmed version of the name from the input box
  const nameInput = document.getElementById('nameInput')
  const name = nameInput.value.trim()
  nameArray.push(name)
  displayNames()
  nameInput.value = ''
}
function displayNames(){
    const nameList = document.getElementById('nameList')//get UL element 
    nameList.innerHTML = '' //clears the list 

    for (let i = 0; i < nameArray.length; i++){
        const name = nameArray[i] //get the current name from the array

=======
// create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') //storing name input element as a var
    const name = nameInput.value.trim() //get the TRIMMED value of the input box and store in a var

    namesArray.push(name)//add the name to the end of the array
    displayNames() // Call the displayNames function to update the list

    nameInput.value = '' // Clear the input field after adding the name
}


function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '' //clear out the previous list items

    for (let i = 0; i < namesArray.length; i++){
        const name = namesArray[i]
         
>>>>>>> 12519a1beb42375b7f92461546331306fd45b467
        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)
<<<<<<< HEAD

    }

}



function pickRandomName () {
   
  const randomNameDiv = document.getElementById('randomName')
  randomNameDiv.textContent = ''

  const randomNumber = Math.floor(Math.random() * nameArray.length)
  const randomName = nameArray[randomNumber]

  randomNameDiv.textContent = randomName

  nameArray.splice(randomNumber, 1)

  displayNames()
=======
    }
}


function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''


    //select random name from names array
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber]

    randomNameDiv.textContent = randomName

    namesArray.splice(randomNumber, 1)

    displayNames();



>>>>>>> 12519a1beb42375b7f92461546331306fd45b467

}




<<<<<<< HEAD



// add onclick to add name btn
document.getElementById('addNameBtn').addEventListener('click', addName)

// add onclick to add name btn
=======
// Event listener for the button click to add a name
document.getElementById('addNameBtn').addEventListener('click', addName)

// Event listener for the button click to select and display a rndm name
>>>>>>> 12519a1beb42375b7f92461546331306fd45b467
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)