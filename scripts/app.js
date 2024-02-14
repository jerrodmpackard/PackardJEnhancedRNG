import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localstorage.js";

let nameInput = document.getElementById('nameInput');
let addNameBtn = document.getElementById('addNameBtn');
let groupNumberInput = document.getElementById('groupNumberInput');
let groupNumberBtn = document.getElementById('groupNumberBtn');
let groupSizeInput = document.getElementById('groupSizeInput');
let groupSizeBtn = document.getElementById('groupSizeBtn');
let injectNamesHere = document.getElementById('injectNamesHere');
let namesCount = document.getElementById('namesCount');

addNameBtn.addEventListener('click', () => {
    saveToLocalStorage(nameInput.value);
    nameInput.value = '';

    displayNames();
});

const displayNames = () => {
    let names = getLocalStorage();

    injectNamesHere.textContent = '';

    names.map(name => {
        let pName = document.createElement('p');
        pName.textContent = name;
        pName.className = 'text-xl me-5'

        let button = document.createElement('button');
        button.type = button;
        button.textContent = 'Remove';
        button.className = 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'

        button.addEventListener('click', () => {
            removeFromLocalStorage(name);
            pName.remove();
            button.remove();
            displayNames();
        });

    
        injectNamesHere.append(pName);
        injectNamesHere.append(button);

    });

    namesCount.textContent = `Total Names: ${names.length}`
}

displayNames();

groupSizeBtn.addEventListener('click', () => {
    // We need to create x number of groups containing the user's choice of group size
    // If user types 3 in the box, we must generate x number of groups of 3
    // Check user input vs name array length
    // Check 


});

groupNumberBtn.addEventListener('click', () => {
    // We need to create a number of groups based upon user input
    // If user types 3 in the box, we must generate 3 groups of x number of users depending upon 
    // Check user input vs name array length

});