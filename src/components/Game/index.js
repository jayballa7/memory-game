import React from 'react';
import './styles.css';
import Tile from '../Tile/index.js';

function Game () {

    var tileCards = [];

        for(var x = 0; x < 20; x++) {
            tileCards.push(<Tile key={x} id = {x} />);
        }


    return (
        <div className = "game-wrapper">
            <div className = "tiles-div">
                {tileCards}
            </div>
        </div>
    )
}

export default Game;

// import React, {Component} from 'react';
// import './styles.css';
// import update from 'immutability-helper';
// import Tile from '../Tile/index.js';
// import faces from '../Faces/index.js';
// import deck from '../Deck/index.js';

// class Game extends Component {
    
// constructor(props) {

    
//     super(props);
//     this.state = {
//         highScore: 0,
//         currentScore: 0,
//         Clicked: false,
//     };

//     this.handleClick = this.handleClick.bind(this);
//     // this.createDeck = this.createDeck.bind(this);
// };


// // createDeck = function() {
// //     for(var i = 0; i < 20; i++) {
// //         var obj = {
// //             "id": i,
// //             image: isFaceDown ? controller : donkeykong
// //         };
// //         deck.push(obj);
// //     };
// // };

//     //   updateObjectInArray = (array, action) => {
//     //     return array.map((item, index) => {
//     //       if (index !== action.index) {
//     //         // This isn't the item we care about - keep it as-is
//     //         return item
//     //       }
      
//     //       // Otherwise, this is the one we want - return an updated value
//     //       return {
//     //         ...item,
//     //         ...action.item
//     //       }
//     //     })
//     //   }

//     //   handleClick = id => {
//     //     let updatedArr = this.updateObjectInArray(deck);
//     //     this.setState({ updatedArr });
//     //   };


//         // handleClick = (id) => {
//         //     var newDeck = this.state.deck[id];
//         //     var chars = this.state.faces;
//         //     var updatedDeck = update(newDeck, {$set: chars}); 
//         //     this.setState({deck: updatedDeck});
//         // }

//         // handleClick = (id, image) => {
//         //     var char = this.state.faces;
//         //     this.setState({
//         //         deck: this.state.deck.map(el => (el.id === id ? Object.assign({}, el, { image }) : char.image))
//         //       });
//         // }

//         // handleUpdate = (todo) => {
//         //     setTodos({...todos, [todo.id]: todo});
//         //   }

//         handleClick = (id) => {
//             this.setState({isFaceDown: false});
//           }

    
// //     shuffleArray = () => {
// //         // Shuffle array of objects
// //         const shuffledArr = this.shuffle(this.state.deck);
// //         // Setting 'shuffledArr' as the new state
// //         this.setState({ shuffledArr });
// //     };

// //       // handleIncrement increments this.state.currentScore by 1
// //   handleIncrement = () => {
// //     // Using setState method to update component's state
// //     this.setState({ currentScore: this.state.currentScore + 1 });
// //   };

// //       // Function that takes an array as a parameter and shuffles it
// //   shuffle = array => {
// //     var currentIndex = array.length,
// //       temporaryValue,
// //       randomIndex;

// //     // While there remain elements to shuffle...
// //     while (0 !== currentIndex) {
// //       // Pick a remaining element...
// //       randomIndex = Math.floor(Math.random() * currentIndex);
// //       currentIndex -= 1;

// //       // And swap it with the current element.
// //       temporaryValue = array[currentIndex];
// //       array[currentIndex] = array[randomIndex];
// //       array[randomIndex] = temporaryValue;
// //     }
// //     return array;
// //   };
    

// //     handleClick = id => {
// //         this.setState(prevState => ({
        
// //           faces: prevState.faces.map(
// //             el => el.id === id? { ...el, image: controller }: el
// //           )
        
// //         }))
// //       };

//     //   handleScore = id => {
//     //     this.state.faces.forEach(element => {
//     //       if (id === element.id && element.clicked === false) {
//     //         element.clicked = true;
//     //         this.setState({ Clicked: false });
//     //         this.handleIncrement();
//     //       } else if (id === element.id && element.clicked === true) {
//     //         if (this.state.currentScore > this.state.highScore) {
//     //           this.setState({ highScore: this.state.currentScore });
//     //         }
//     //         this.setState({ currentScore: 0 });
//     //         this.setState({ Clicked: true });
//     //         this.state.faces.forEach(element => (element.clicked = false));
//     //         console.log(this.state.faces);
//     //       }
//     //     });
//     //   };

//     render() {


//         return(
//             <div className = "game-wrapper">
//                 <div className = "tiles-div">
//                     {/* {this.state.deck.map((keyName, i) => ( */}
//                                 {/* <Tile 
//                                     // Clicked={this.state.Clicked}
//                                     handleClick={this.handleClick}
//                                     // key={i}
//                                     // image={keyName.image}
//                                 /> */}
//                     {numTiles.map(i => {
//                         return <Tile />
//                     })}
//                     {/* ))} */}
//                 </div>
//             </div>
//         )           
//     };

// // render() {

// //     console.log(faces)

// //     return(
// //         <div className = "game-wrapper">
// //             <div className = "tiles-div">
// //                 {this.state.faces.map((keyName, i) => (
// //                             <Tile 
// //                                 Clicked={this.state.Clicked}
// //                                 handleClick={this.handleClick}
// //                                 id={keyName.id}
// //                                 key={i}
// //                                 image={keyName.image}
// //                             />
// //                 ))}
// //             </div>
// //         </div>
// //     )           
// // };

// }


// export default Game;