
exports.divider = function(character, length = 50){
    var structure = '';
    for(var i = 0; i < length;i++){
        structure += character;
    }
    console.log(structure);
}