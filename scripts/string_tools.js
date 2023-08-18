function removeNonAlphanumeric(input) {
    return input.replace(/[^a-z0-9]|\s+|\r?\n|\r/gmi, '');
}