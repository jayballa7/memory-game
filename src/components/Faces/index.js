import donkeykong from '../../img/donkeykong.jpg';
import mario from '../../img/mario.jpg';
import banjo from '../../img/banjo.jpg';
import zelda from '../../img/zelda.png';
import diddykong from '../../img/diddykong.jpg';
import sonic from '../../img/sonic.jpg';
import pacman from '../../img/pacman.png';
import luigi from '../../img/luigi.jpg';
import yoshi from '../../img/yoshi.jpg';
import link from '../../img/link.jpg';

var characters =  [donkeykong, diddykong, mario, luigi, yoshi, banjo, pacman, zelda, link, sonic];

// Make an array which has 2 of each, then randomize it
var possibleFaces = characters.slice(0);
var selected = [];
for (var i = 0; i < 10; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = Math.floor(Math.random(possibleFaces.length));
    var character = possibleFaces[randomInd];
    // var obj = {
    //     id: i,
    //     image: character
    // };
    // Push 2 copies onto array
    selected.push(character);
    selected.push(character);
    // Remove from array
    possibleFaces.splice(randomInd, 1);
}

// Now shuffle the elements of that array
var shuffleArray = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
};
shuffleArray(selected);

var faces = selected;

// var faces =  [
//        {
//     "id": 1,
//     "clicked" : false,
//     "name": "Donkey Kong",
//     "image": [controller, donkeykong]
//   },
//   {
//     "id": 2,
//     "clicked" : false,
//     "name": "Diddy Kong",
//     "image": [controller, diddykong]
//   },
//   {
//     "id": 3,
//     "clicked" : false,
//     "name": "Mario",
//     "image": [controller, mario]
//   },
//   {
//     "id": 4,
//     "clicked" : false,
//     "name": "Luigi",
//     "image": [controller, luigi]
//   },
//   {
//     "id": 5,
//     "clicked" : false,
//     "name": "Yoshi",
//     "image": [controller, yoshi]
//   },
//   {
//     "id": 6,
//     "clicked" : false,
//     "name": "Banjo Kazooie",
//     "image": [controller, banjo]
//   },
//   {
//     "id": 7,
//     "clicked" : false,
//     "name": "Pac Man",
//     "image": [controller, pacman]
//   },
//   {
//     "id": 8,
//     "clicked" : false,
//     "name": "Zelda",
//     "image": [controller, zelda]
//   },
//   {
//     "id": 9,
//     "clicked" : false,
//     "name": "Link",
//     "image": [controller, link]
//   },
//   {
//     "id": 10,
//     "clicked" : false,
//     "name": "Sonic",
//     "image": [controller, sonic]
//   }

// ]

export default faces;