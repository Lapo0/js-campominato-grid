// CREARE UN PULSANTE CON EVENTO CLICK CHE FACCIA APPARIRE LA GRIGLIA
const buttonStart = document.getElementById('start-button')
console.log(buttonStart)

// Chiedere all'utente la difficoltà del livello
const difficulty = document.querySelector('.form-control')

buttonStart.addEventListener('click', function() {

    // Assegnare il valore della difficoltà scelta
    const inputDifficulty = difficulty.value
    console.log(inputDifficulty)

    // Stabilire lato griglia e celle totali in base alla difficoltà
    let latoGriglia = inputDifficulty
    let celleTotali = latoGriglia ** 2
    console.log(latoGriglia, celleTotali)

    // Selezionare la griglia dal DOM
    const gridEl = document.querySelector ('.griglia')
    console.log(gridEl)

    // Cancellare il contenuto all'interno della griglia
    gridEl.innerHTML = ''

    // Creare ciclo per mettere le celle in base a quante ne sono state selezionate
    for (let i = 0; i < celleTotali; i++) {
        let numGrid = i + 1

        const cellaString = `<div class="cella" style="width: calc(100% / ${ latoGriglia })"> ${ numGrid} </div>`

        // Concatenare la cella all'elemento griglia
        gridEl.innerHTML += cellaString
    }

    // Prendere i div creati con classe .cella
    const celleElements = document.querySelectorAll('.cella')
    console.log(celleElements)

    // Creare un ciclo per andare a stampare il numero corrispondente a ognuna
    for (let i = 0; i < celleElements.length; i++) {
        let numCell = i + 1
        console.log(numCell)

        const cella = celleElements[i]

        // Assegnargli il numero corretto al click
        cella.addEventListener('click', function() {
            console.log(numCell)
        })
    }
})

