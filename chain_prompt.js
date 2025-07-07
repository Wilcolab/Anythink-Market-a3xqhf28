function toKebabCase(str) {
    return str
        .trim() // Remove leading/trailing spaces
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, '-') // Replace one or more spaces with a single hyphen
}

module.exports = toKebabCase;
