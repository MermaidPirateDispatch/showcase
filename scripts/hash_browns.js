const hashBrowns = {
    "" : "",
    "" : "",
};

function hash(text) {
    var hash = 0;
    for (var i = 0; i < text.length; i++) {
        hash = (hash * 1000000 + text.charCodeAt(i)) % 1000000000;
        hash = hash ^ (hash >> 16);
    }
    return hash;
  }