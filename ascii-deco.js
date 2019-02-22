
// Returns a string of given characters of given length
exports.lineBanner = function(character, length = 50){
    var line = '';
    for(var i = 0; i < length; i++){
        line += character+' ';
    }
    return line;
}

// Returns a triangle shape made up of given characters
// length represents the number of characters in the triangle's base
exports.triangle = function(character, length = 5){
    var shape = '';
    for(var i = 0; i < length; i++){
        for(var j = length-i; j > 0;j--){
            shape += ' ';
        }
        for(var k = 0; k <= i ;k++){
            shape += character+' ';
        }
        shape += '\n';
    }
    return shape;
}

// Returns a square shape made up of given characters
// length represents the number of characters in the square's sides
exports.square = function(character, length = 5){
    var shape = '';
    for(var i = 0; i < length; i++){
        for(var j = 0; j < length; j++){
            shape += character+' ';
        }
        shape += '\n';
    }
    return shape;
}