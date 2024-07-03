function firstChar(text) {
  // your code here
	    for (let i = 0; i < text.length; i++) {
        // Check if the character is not a space
        if (text[i] !== ' ') {
            // Return the first non-space character
            return text[i];
        }
    }
    // If only spaces are found or the string is empty, return an empty string
    return '';
}



// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
