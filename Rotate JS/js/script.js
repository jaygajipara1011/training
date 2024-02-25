function removeCharacter(str, position) {
    // Check if position is valid
    if (position < 0 || position >= str.length) {
        console.log("Invalid position");
        return str;
    }

    // Split the string into two parts: before the character to remove and after
    const before = str.substring(0, position);
    const after = str.substring(position + 1);

    // Concatenate the two parts and return the modified string
    return before + after;
}

// Example usage:
const originalString = "example";
const modifiedString = removeCharacter(originalString, 2);
console.log(modifiedString); // Output: "exmple"
