const scrambledEggs = {
    "test" : "I love you Tonia!",
};

function unscramble(key) {
    if (scrambledEggs.hasOwnProperty(key)) {
        return scrambledEggs[key];
    }
    return key;
}