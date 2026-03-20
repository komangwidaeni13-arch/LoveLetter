// Typewriter effect function
function typeWriter(text, i = 0) {
    if (i < text.length) {
        document.getElementById('output').innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), 500);
    }
}

// Starting the typewriter effect
const message = 'Hello, World! This is the typewriter effect.';
typeWriter(message);