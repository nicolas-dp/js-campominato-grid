/* L'utente indica un livello di difficoltà 
in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


const inputElement = document.querySelector(".form-select").value

inputElement.addEventListener("submit", function () {
    selectElements(".cell", "active")
    //Genera numeri da 1 a 100
    generateGrid(".cells", "div", "cell", 64)
    
})


/**
 * 
 * @param {string} selector css selector
 * @param {string} tag_name a tag name
 * @param {string} class_name a class name
 */
function generateGrid(selector, tag_name, class_name, limit) {
    const cellsElement = document.querySelector(selector)

    for (let i = 1; i <= limit; i++) {
        const cellItem = document.createElement(tag_name)
        cellItem.classList.add(class_name)
        cellsElement.append(cellItem)
    }
}

/**
 * 
 * @param {string} selector a css selector
 * @param {string} active_class a css class name
 */
function selectElements(selector, active_class) {
    const cells = document.querySelectorAll(selector);
    const numbers = generateCellsNumber();

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        //Add random number
        const spanElement = document.createElement("span")
        spanElement.append(numbers[i])
        cell.append(spanElement)

        cell.addEventListener("click", function () {
            this.firstChild.style.opacity = 1;
            if (isEven(Number(this.innerText))) {
                this.classList.add("active_green")
            } else {
                this.classList.add("active_red")
            }
        })
    }
}



/* Generare numeri casuali */

/**
 * 
 * @param {number} min Minumum number to generate
 * @param {number} max Max number
 * @returns {number}
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCellsNumber() {
    const randomNumbers = [];

    // generare numeri casuali unici in base al valore preso dal input value

    while (randomNumbers.length !== inputElement) {
        const randomNumber = getRandomInteger(1, inputElement)
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        }
    }
    return randomNumbers;
}


function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }

}







console.log(generateCellsNumber());