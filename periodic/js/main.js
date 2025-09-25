// Periodic table data with positions (Indonesian names)
const elements = [
    { number: 1, symbol: 'H', name: 'Hidrogen', row: 1, col: 1 },
    { number: 2, symbol: 'He', name: 'Helium', row: 1, col: 18 },
    { number: 3, symbol: 'Li', name: 'Litium', row: 2, col: 1 },
    { number: 4, symbol: 'Be', name: 'Berilium', row: 2, col: 2 },
    { number: 5, symbol: 'B', name: 'Boron', row: 2, col: 13 },
    { number: 6, symbol: 'C', name: 'Karbon', row: 2, col: 14 },
    { number: 7, symbol: 'N', name: 'Nitrogen', row: 2, col: 15 },
    { number: 8, symbol: 'O', name: 'Oksigen', row: 2, col: 16 },
    { number: 9, symbol: 'F', name: 'Fluorin', row: 2, col: 17 },
    { number: 10, symbol: 'Ne', name: 'Neon', row: 2, col: 18 },
    { number: 11, symbol: 'Na', name: 'Natrium', row: 3, col: 1 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', row: 3, col: 2 },
    { number: 13, symbol: 'Al', name: 'Aluminium', row: 3, col: 13 },
    { number: 14, symbol: 'Si', name: 'Silikon', row: 3, col: 14 },
    { number: 15, symbol: 'P', name: 'Fosfor', row: 3, col: 15 },
    { number: 16, symbol: 'S', name: 'Sulfur', row: 3, col: 16 },
    { number: 17, symbol: 'Cl', name: 'Klorin', row: 3, col: 17 },
    { number: 18, symbol: 'Ar', name: 'Argon', row: 3, col: 18 },
    { number: 19, symbol: 'K', name: 'Kalium', row: 4, col: 1 },
    { number: 20, symbol: 'Ca', name: 'Kalsium', row: 4, col: 2 },
    { number: 21, symbol: 'Sc', name: 'Skandium', row: 4, col: 3 },
    { number: 22, symbol: 'Ti', name: 'Titanium', row: 4, col: 4 },
    { number: 23, symbol: 'V', name: 'Vanadium', row: 4, col: 5 },
    { number: 24, symbol: 'Cr', name: 'Kromium', row: 4, col: 6 },
    { number: 25, symbol: 'Mn', name: 'Mangan', row: 4, col: 7 },
    { number: 26, symbol: 'Fe', name: 'Besi', row: 4, col: 8 },
    { number: 27, symbol: 'Co', name: 'Kobalt', row: 4, col: 9 },
    { number: 28, symbol: 'Ni', name: 'Nikel', row: 4, col: 10 },
    { number: 29, symbol: 'Cu', name: 'Tembaga', row: 4, col: 11 },
    { number: 30, symbol: 'Zn', name: 'Seng', row: 4, col: 12 },
    { number: 31, symbol: 'Ga', name: 'Galium', row: 4, col: 13 },
    { number: 32, symbol: 'Ge', name: 'Germanium', row: 4, col: 14 },
    { number: 33, symbol: 'As', name: 'Arsenik', row: 4, col: 15 },
    { number: 34, symbol: 'Se', name: 'Selenium', row: 4, col: 16 },
    { number: 35, symbol: 'Br', name: 'Bromin', row: 4, col: 17 },
    { number: 36, symbol: 'Kr', name: 'Kripton', row: 4, col: 18 },
    { number: 37, symbol: 'Rb', name: 'Rubidium', row: 5, col: 1 },
    { number: 38, symbol: 'Sr', name: 'Stronsium', row: 5, col: 2 },
    { number: 39, symbol: 'Y', name: 'Itrium', row: 5, col: 3 },
    { number: 40, symbol: 'Zr', name: 'Zirkonium', row: 5, col: 4 },
    { number: 41, symbol: 'Nb', name: 'Niobium', row: 5, col: 5 },
    { number: 42, symbol: 'Mo', name: 'Molibdenum', row: 5, col: 6 },
    { number: 43, symbol: 'Tc', name: 'Teknesium', row: 5, col: 7 },
    { number: 44, symbol: 'Ru', name: 'Rutenium', row: 5, col: 8 },
    { number: 45, symbol: 'Rh', name: 'Rodium', row: 5, col: 9 },
    { number: 46, symbol: 'Pd', name: 'Paladium', row: 5, col: 10 },
    { number: 47, symbol: 'Ag', name: 'Perak', row: 5, col: 11 },
    { number: 48, symbol: 'Cd', name: 'Kadmium', row: 5, col: 12 },
    { number: 49, symbol: 'In', name: 'Indium', row: 5, col: 13 },
    { number: 50, symbol: 'Sn', name: 'Timah', row: 5, col: 14 },
    { number: 51, symbol: 'Sb', name: 'Antimon', row: 5, col: 15 },
    { number: 52, symbol: 'Te', name: 'Telurium', row: 5, col: 16 },
    { number: 53, symbol: 'I', name: 'Iodin', row: 5, col: 17 },
    { number: 54, symbol: 'Xe', name: 'Xenon', row: 5, col: 18 },
    { number: 55, symbol: 'Cs', name: 'Sesium', row: 6, col: 1 },
    { number: 56, symbol: 'Ba', name: 'Barium', row: 6, col: 2 },
    { number: 57, symbol: 'La', name: 'Lantanum', row: 8, col: 3 },
    { number: 58, symbol: 'Ce', name: 'Serium', row: 8, col: 4 },
    { number: 59, symbol: 'Pr', name: 'Praseodimium', row: 8, col: 5 },
    { number: 60, symbol: 'Nd', name: 'Neodimium', row: 8, col: 6 },
    { number: 61, symbol: 'Pm', name: 'Prometium', row: 8, col: 7 },
    { number: 62, symbol: 'Sm', name: 'Samarium', row: 8, col: 8 },
    { number: 63, symbol: 'Eu', name: 'Europium', row: 8, col: 9 },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', row: 8, col: 10 },
    { number: 65, symbol: 'Tb', name: 'Terbium', row: 8, col: 11 },
    { number: 66, symbol: 'Dy', name: 'Disprosium', row: 8, col: 12 },
    { number: 67, symbol: 'Ho', name: 'Holmium', row: 8, col: 13 },
    { number: 68, symbol: 'Er', name: 'Erbium', row: 8, col: 14 },
    { number: 69, symbol: 'Tm', name: 'Tulium', row: 8, col: 15 },
    { number: 70, symbol: 'Yb', name: 'Iterbium', row: 8, col: 16 },
    { number: 71, symbol: 'Lu', name: 'Lutesium', row: 8, col: 17 },
    { number: 72, symbol: 'Hf', name: 'Hafnium', row: 6, col: 4 },
    { number: 73, symbol: 'Ta', name: 'Tantalum', row: 6, col: 5 },
    { number: 74, symbol: 'W', name: 'Tungsten', row: 6, col: 6 },
    { number: 75, symbol: 'Re', name: 'Renium', row: 6, col: 7 },
    { number: 76, symbol: 'Os', name: 'Osmium', row: 6, col: 8 },
    { number: 77, symbol: 'Ir', name: 'Iridium', row: 6, col: 9 },
    { number: 78, symbol: 'Pt', name: 'Platina', row: 6, col: 10 },
    { number: 79, symbol: 'Au', name: 'Emas', row: 6, col: 11 },
    { number: 80, symbol: 'Hg', name: 'Raksa', row: 6, col: 12 },
    { number: 81, symbol: 'Tl', name: 'Talium', row: 6, col: 13 },
    { number: 82, symbol: 'Pb', name: 'Timbal', row: 6, col: 14 },
    { number: 83, symbol: 'Bi', name: 'Bismut', row: 6, col: 15 },
    { number: 84, symbol: 'Po', name: 'Polonium', row: 6, col: 16 },
    { number: 85, symbol: 'At', name: 'Astatin', row: 6, col: 17 },
    { number: 86, symbol: 'Rn', name: 'Radon', row: 6, col: 18 },
    { number: 87, symbol: 'Fr', name: 'Fransium', row: 7, col: 1 },
    { number: 88, symbol: 'Ra', name: 'Radium', row: 7, col: 2 },
    { number: 89, symbol: 'Ac', name: 'Aktinium', row: 9, col: 3 },
    { number: 90, symbol: 'Th', name: 'Torium', row: 9, col: 4 },
    { number: 91, symbol: 'Pa', name: 'Protaktinium', row: 9, col: 5 },
    { number: 92, symbol: 'U', name: 'Uranium', row: 9, col: 6 },
    { number: 93, symbol: 'Np', name: 'Neptunium', row: 9, col: 7 },
    { number: 94, symbol: 'Pu', name: 'Plutonium', row: 9, col: 8 },
    { number: 95, symbol: 'Am', name: 'Amerisium', row: 9, col: 9 },
    { number: 96, symbol: 'Cm', name: 'Kurium', row: 9, col: 10 },
    { number: 97, symbol: 'Bk', name: 'Berkelium', row: 9, col: 11 },
    { number: 98, symbol: 'Cf', name: 'Kalifornium', row: 9, col: 12 },
    { number: 99, symbol: 'Es', name: 'Einsteinium', row: 9, col: 13 },
    { number: 100, symbol: 'Fm', name: 'Fermium', row: 9, col: 14 },
    { number: 101, symbol: 'Md', name: 'Mendelevium', row: 9, col: 15 },
    { number: 102, symbol: 'No', name: 'Nobelium', row: 9, col: 16 },
    { number: 103, symbol: 'Lr', name: 'Lawrensium', row: 9, col: 17 },
    { number: 104, symbol: 'Rf', name: 'Ruterfordium', row: 7, col: 4 },
    { number: 105, symbol: 'Db', name: 'Dubnium', row: 7, col: 5 },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', row: 7, col: 6 },
    { number: 107, symbol: 'Bh', name: 'Bohrium', row: 7, col: 7 },
    { number: 108, symbol: 'Hs', name: 'Hassium', row: 7, col: 8 },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', row: 7, col: 9 },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', row: 7, col: 10 },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', row: 7, col: 11 },
    { number: 112, symbol: 'Cn', name: 'Kopernisium', row: 7, col: 12 },
    { number: 113, symbol: 'Nh', name: 'Nihonium', row: 7, col: 13 },
    { number: 114, symbol: 'Fl', name: 'Flerovium', row: 7, col: 14 },
    { number: 115, symbol: 'Mc', name: 'Moskovium', row: 7, col: 15 },
    { number: 116, symbol: 'Lv', name: 'Livermorium', row: 7, col: 16 },
    { number: 117, symbol: 'Ts', name: 'Tenesin', row: 7, col: 17 },
    { number: 118, symbol: 'Og', name: 'Oganesson', row: 7, col: 18 }
];

let selectedElement = 1; // Start with Hydrogen
let filledElements = new Set();
let totalAttempts = 0;
let correctAttempts = 0;

function createPeriodicTable() {
    const table = document.getElementById('periodic-table');
    const grid = Array(9).fill().map(() => Array(18).fill(null));

    // Place elements in grid
    elements.forEach(element => {
        grid[element.row - 1][element.col - 1] = element;
    });

    // Create cells
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 18; col++) {
            const cell = document.createElement('div');

            if (grid[row][col]) {
                const element = grid[row][col];
                cell.className = 'element empty';
                cell.dataset.number = element.number;
                cell.innerHTML = `
                            <div class="atomic-number">${element.number}</div>
                            <div class="symbol">?</div>
                            <div class="name">?</div>
                        `;
                cell.onclick = () => selectElement(element.number);
            } else {
                cell.style.visibility = 'hidden';
            }

            table.appendChild(cell);
        }
    }
}

function selectElement(atomicNumber) {
    // Remove previous selection
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove('selected');
    });

    selectedElement = atomicNumber;
    const elementCell = document.querySelector(`[data-number="${atomicNumber}"]`);
    if (elementCell) {
        // Show selection even on filled elements (but keep them green)
        elementCell.classList.add('selected');
        document.getElementById('symbol-input').focus();
    }
}

function moveSelection(direction) {
    const currentElement = elements.find(e => e.number === selectedElement);
    if (!currentElement) return;

    let targetElement = null;

    switch (direction) {
        case 'ArrowUp':
            // Find element above in same column
            targetElement = elements.find(e =>
                e.col === currentElement.col &&
                e.row === currentElement.row - 1
            );
            break;
        case 'ArrowDown':
            // Find element below in same column
            targetElement = elements.find(e =>
                e.col === currentElement.col &&
                e.row === currentElement.row + 1
            );
            break;
        case 'ArrowLeft':
            // Find element to the left in same row
            targetElement = elements.find(e =>
                e.row === currentElement.row &&
                e.col === currentElement.col - 1
            );
            break;
        case 'ArrowRight':
            // Find element to the right in same row
            targetElement = elements.find(e =>
                e.row === currentElement.row &&
                e.col === currentElement.col + 1
            );
            break;
    }

    if (targetElement) {
        selectElement(targetElement.number);
    }
}

function checkAnswer() {
    if (!selectedElement) {
        showFeedback('Please select an element first!', false);
        return;
    }

    if (filledElements.has(selectedElement)) {
        showFeedback('Element already filled!', false);
        return;
    }

    const input = document.getElementById('symbol-input').value.trim();
    const element = elements.find(e => e.number === selectedElement);

    totalAttempts++;

    if (input.toLowerCase() === element.name.toLowerCase()) {
        // Correct answer
        correctAttempts++;
        filledElements.add(selectedElement);

        const elementCell = document.querySelector(`[data-number="${selectedElement}"]`);
        elementCell.className = 'element filled';
        elementCell.innerHTML = `
                    <div class="atomic-number">${element.number}</div>
                    <div class="symbol">${element.symbol}</div>
                    <div class="name">${element.name}</div>
                `;

        showFeedback(`Correct! ${element.name} (${element.symbol})`, true);

        // Keep selection on the same element (no auto-move)
        // User can manually navigate to next element using arrow keys or clicking

        // Check if all elements are filled
        if (filledElements.size === 118) {
            setTimeout(() => {
                showFeedback('Congratulations! You completed the periodic table!', true);
            }, 1000);
        }
    } else {
        showFeedback(`Incorrect. Try again!`, false);
    }

    document.getElementById('symbol-input').value = '';
    updateStats();
}

function moveToNextUnfilledElement() {
    // Find next unfilled element
    for (let i = 1; i <= 118; i++) {
        if (!filledElements.has(i)) {
            selectElement(i);
            return;
        }
    }
}

function showFeedback(message, isCorrect) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.style.display = 'block';

    setTimeout(() => {
        feedback.style.display = 'none';
    }, 2000);
}

function updateStats() {
    document.getElementById('correct-count').textContent = filledElements.size;
    document.getElementById('remaining-count').textContent = 118 - filledElements.size;

    const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

function resetTable() {
    if (confirm('Are you sure you want to reset the entire table?')) {
        filledElements.clear();
        selectedElement = 1; // Reset to Hydrogen
        totalAttempts = 0;
        correctAttempts = 0;

        document.querySelectorAll('.element').forEach(el => {
            if (el.dataset.number) {
                const elementNum = parseInt(el.dataset.number);
                const element = elements.find(e => e.number === elementNum);

                el.className = 'element empty';
                el.innerHTML = `
                            <div class="atomic-number">${element.number}</div>
                            <div class="symbol">?</div>
                            <div class="name">?</div>
                        `;
            }
        });

        selectElement(1); // Select Hydrogen
        updateStats();
        showFeedback('Table reset successfully!', true);
    }
}

// Event listeners
document.addEventListener('keydown', function (e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault(); // Prevent page scrolling
        moveSelection(e.key);
    }
});

document.getElementById('symbol-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Initialize
createPeriodicTable();
selectElement(1); // Start with Hydrogen selected
updateStats();