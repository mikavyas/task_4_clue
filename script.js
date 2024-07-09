function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guess = guessInput.value.trim().toLowerCase();

    if (guess === '') {
        message.textContent = 'Please enter a guess.';
        return;
    }

    if (guess === 'patio') {
        message.textContent = 'Congratulations! You guessed the word! Hidden Message: MUJI ELEVATOR 10th FLOOR PATIO';
        guessInput.disabled = true;
    } else {
        message.textContent = 'Incorrect guess. Try again.';
        guessInput.value = '';  // Clear the input field
    }
}
