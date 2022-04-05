/* L'utente indica un livello di difficoltà 
in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/**
 * 
 * @param {string} selector css selector
 * @param {string} tag_name a tag name
 * @param {string} class_name a class name
 */
function generateGrid(row_lenght, cols_lenght, selector, element_name, class_name) {
    const cellsElement = document.querySelector(selector)
    for (let i = 1; i <= row_lenght; i++) {
        const cell = document.createElement(element_name)
        cell.classList.add(class_name)
        cell.style.width = `calc(100% / ${cols_lenght})`
        cellsElement.append(cell)
        generateGridNumbers(row_lenght)
    }

}

function selectCells(selector) {
    const cells = document.querySelectorAll(selector)
    return cells
}

//Attivazione colore al click
function activateCell(selector) {
    const cells = selectCells(selector)
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        cell.addEventListener('click', function () {
            cell.classList.add("selected")
        })
    }
}

function generateGridNumbers(row_lenght) {
    const gridNumbers = []
    for (let i = 1; i <= row_lenght; i++) {
        gridNumbers.push(i)
        
        
    }
    return gridNumbers;
}



/* GENERARE LE FUNCTION DOPO IL CLICK */

const elementButton = document.querySelector('.btn_genera');

elementButton.addEventListener("click", function () {
    let option_value = document.getElementById("mylist").value;
    console.log(option_value);

    if (option_value == 1) {
        row_lenght = 100;
        cols_lenght = 10;
        
        generateGrid(row_lenght, cols_lenght, '.cells', "div", "cell")
        activateCell('.cell', 'selected')
        

    } else if (option_value == 2) {
        row_lenght = 81;
        cols_lenght = 9;
        
        generateGrid(row_lenght, cols_lenght, '.cells', "div", "cell")
        activateCell('.cell', 'selected')
       
    } else {
        row_lenght = 49;
        cols_lenght = 7;
        cells.inner
        generateGrid(row_lenght, cols_lenght, '.cells', "div", "cell")
        activateCell('.cell', 'selected')
        
    }

})

