/* L'utente indica un livello di difficoltà 
in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/
let difficult_low = 100;
let difficult_medium = 81;
let difficult_high = 61;

/**
 * 
 * @param {string} selector css selector
 * @param {string} tag_name a tag name
 * @param {string} class_name a class name
 */
function generateGrid(number_of_cells, selector, element_name, class_name) {
    const cellsElement = document.querySelector(selector)
    for (let i = 1; i <= number_of_cells; i++) {
        const cell = document.createElement(element_name)
        cell.classList.add(class_name)
        cellsElement.append(cell)
    }
}

function selectCells(selector) {
    const cells = document.querySelectorAll(selector)
    return cells
}

//Attivazione colore al click
function activateCell(selector, class_name) {
    const cells = selectCells(selector)
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        cell.addEventListener('click', function () {
            cell.classList.add("selected")
        })
    }
}



function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateGridNumbers(min, max) {
    const gridNumbers = []

    while (gridNumbers.length !== max) {
        const randomNumber = getRandomInteger(min, max)
        //Esclusività di un numero nella griglia
        if (!gridNumbers.includes(randomNumber)) {
            gridNumbers.push(randomNumber)
        }
    }
    return gridNumbers
}


function isEven(n) {
    if (n % 2 === 0) {
        return true
    } else {
        return false

    }
}

function fillCells(selector) {
    const cells = selectCells(selector)
    //console.log(cells);
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        //console.log(cell);
        const gridNumbers = generateGridNumbers(1, max)
        cell.innerHTML = `<span>${gridNumbers[index]}</span>`
    }
}

const elementButton = document.querySelector('.btn_genera');

elementButton.addEventListener("click", function () {
    let option_value = document.getElementById("mylist").value;
    console.log(option_value);

    if (option_value == 1) {
        generateGridNumbers(1, difficult_low)
        generateGrid(difficult_low, '.cells', 'div', 'cell')
        activateCell('.cell', 'selected')
        fillCells('.cell')
    } else if (option_value == 2) {
        generateGridNumbers(1, difficult_medium)
        generateGrid(difficult_medium, '.cells', 'div', 'cell')
        activateCell('.cell', 'selected')
        fillCells('.cell')
    } else {
        generateGridNumbers(1, difficult_hard)
        generateGrid(difficult_hard, '.cells', 'div', 'cell')
        activateCell('.cell', 'selected')
        fillCells('.cell')
    }
})


