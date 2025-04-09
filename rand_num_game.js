
let map = [];
let tile1 = null, tile2 = null;

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const loadMap = (rows = 4, cols = 4) => {
    const max = (rows * cols) / 2;
    let tiles = [];
    
    for (let i = 1; i <= max; i++) {
        tiles.push(i, i);
    }

    tiles = shuffle(tiles);

    map = [];
    let index = 0;
    for (let row = 0; row < rows; row++) {
        map[row] = [];
        for (let col = 0; col < cols; col++) {
            map[row][col] = tiles[index++];
        }
    }
};

const makeBoard = (rows = 4, cols = 4) => {
    let output = '<table>';
    for (let row = 0; row < rows; row++) {
        output += '<tr>';
        for (let col = 0; col < cols; col++) {
            output += `<td><button class="tile" id="${row}_${col}" onclick="process(${row}, ${col})"></button></td>`;
        }
        output += '</tr>';
    }
    document.getElementById('gameBoard').innerHTML = output + '</table>';
};

const resetBoard = () => {
    loadMap();
    makeBoard();
};

const process = (row, col) => {
    let clickedTile = document.getElementById(`${row}_${col}`);
    
    if (clickedTile.innerHTML !== '') return;
    
    if (!tile1) {
        tile1 = clickedTile;
        clickedTile.innerHTML = map[row][col];
    } else if (!tile2) {
        tile2 = clickedTile;
        clickedTile.innerHTML = map[row][col];
        
        setTimeout(checkMatch, 1000);
    }
};

const checkMatch = () => {
    if (tile1.innerHTML == tile2.innerHTML) {
        tile1.disabled = true;
        tile2.disabled = true;
    } else {
        tile1.innerHTML = '';
        tile2.innerHTML = '';
    }
    
    tile1 = tile2 = null;
};

const gameReset = () => {
    tile1 = tile2 = null;
    resetBoard();
};

gameReset();
