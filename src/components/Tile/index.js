// import React, {useState} from 'react';
// import './styles.css';
// import faces from '../Faces/index.js';
// import controller from '../../img/controller.png';


// function Tile(card) {

//     let characters = faces;

//     let index = card.id;

//     let imagesPath = {
//         up: characters[index],
//         down: controller
//     }

//     // let flippedTiles = [];
//     // let numMatches;

//     let [faceDown, setFaceDown] = useState(true);
//     // let [flippedTiles, setFlippedTiles] = useState(0);
//     // let [isMatch, updateMatch] = useState(false);

//       let cardClick = () => {
//         setFaceDown(!faceDown);
//         // console.log(faces[index]);
//         // if (flippedTiles.length < 2 && faceDown === false) {
//         //   setFlippedTiles(faces[index]);
//         //   // console.log(flippedTiles);
//         // }

//         //   if (flippedTiles.length === 2) {
//         //       if (flippedTiles[0] === flippedTiles[1]) {
//         //           flippedTiles[0].isMatch = true;
//         //           flippedTiles[1].isMatch = true;
//         //           flippedTiles.length = 0;
//         //           numMatches++;
//         //           console.log(numMatches);
//         //       }
//         //   }
        
//       }



//     let getImageName = () => faceDown ? 'down' : 'up';

//     const imageName = getImageName();
    

//       return (
//         <div>
//             <div className="tile-wrapper" onClick={cardClick}>
//                 <img src={imagesPath[imageName]} className = "tile-img" alt = "card" id = {card.id}/>
//             </div>
//         </div>
//       );
//     };
  
// export default Tile;


// import { useState } from 'react';
// import './styles.css';
// // import faces from '../Faces/index.js';
// // import controller from '../../img/controller.png';
// // import donkeykong from '../../img/donkeykong.jpg';

//         // var images = [];
//         // for(var j = 0; j < 20; j++) {
//         //     images.push(controller);
//         // }
  
//         function Tile() {



// //         var [image, setImage] = useState(images);
// //         var [character, setCharacter] = useState(faces);

//         const [isActive, setActive] = useState(true);

//         const toggleClass = () => {
//           setActive(!isActive);
//         };

// //         var onUpdateItems = () => {
// //             let newDeck = image;
// //             let card = newDeck.splice(0, 1, donkeykong);
// //             setImage(card);
// //           };


// //   function handleClick() {
// //     onUpdateItems();
// //   }

//     // return(
//     //     <div className="tile-wrapper">
//     //         <div className={isActive ? 'tile-img': null} onClick={toggleClass}></div>
//     //     </div>
//     //     )
//     return (
//         <div className="tile-wrapper">
//             <div className={isActive ? "tile-img" : "char-img"} onClick={toggleClass}></div>
//         </div>
//         )
// }

// export default Tile;

// import React, {Component} from 'react';
// import './styles.css';
// import controller from '../../img/controller.png';
// import faces from '../Faces/index.js';

// class Tile extends Component {
//     constructor(props) {
//         var images = [];
//         for(var i = 0; i < 20; i++) {
//             images.push(controller);
//         }
//         super(props);
//         this.state = {
//             image: images,
//             faces,
//         };
//         this.handleClick = this.handleClick.bind(this);
//     };

//         handleClick = (index) => {
//             var newDeck = new Array(10), faces, result = this.state.image.slice(0);
//             result.splice.apply(result, [0, faces.length].concat(faces));
//             this.setState({newDeck});
//         }

// render() {
//     return(
//         <div className="tile-wrapper" onClick={(e) => this.handleClick(this.index)}>
//             {this.state.image.map((pic, i) => <div className="img-div"><img src = {this.state.image[i]} alt = "tile" className = "tile-img"/> </div>)}
//         </div>
//     )
// }
// }

// export default Tile;

import React from 'react';
import './styles.css';

function Tile(props) {

    let i = props.id;
  
    return(
        <div className="tile-wrapper">
            <div className="img-div">
                <img src = {props.image} onClick={() => props.cardClick(i)} alt = "tile" className = "tile-img"/>
            </div>
        </div>
    )
}

export default Tile;

