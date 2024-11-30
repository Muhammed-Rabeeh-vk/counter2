// Initialize count with localStorage value or 0
let count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;


// Select DOM elements
const screen = document.querySelector("#screen");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const setInput = document.querySelector("#set-value");
const setButton = document.querySelector("#set-button");

// Function to update the screen and save to localStorage
function updateScreen() {
    screen.textContent = count;
    localStorage.setItem("counter", count); // Save to localStorage
}

// Increment button logic
incrementBtn.addEventListener("click", () => {
    count++;
    updateScreen();
});

// Decrement button logic (prevent negative values)
decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateScreen();
    }
});

// Reset button logic
resetBtn.addEventListener("click", () => {
    count = 0;
    updateScreen();
});

// Set button logic
setButton.addEventListener("click", () => {
    const newValue = parseInt(setInput.value); // Parse input value
    if (!isNaN(newValue) && newValue >= 0) {
        count = newValue; // Update count if valid
        updateScreen();
        setInput.value = ""; // Clear input field
    } else {
        alert("Please enter a valid non-negative number!"); // Show error for invalid input
    }
});

// Initialize the screen with the stored value
updateScreen();
