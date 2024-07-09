function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guess = guessInput.value.trim().toLowerCase();

    if (guess === 'patio') {
        message.textContent = 'Congratulations! You guessed the word! Hidden Message: MUJI ELEVATOR 10th FLOOR PATIO';
    } else {
        message.textContent = 'Incorrect guess. Try again.';
    }
}
