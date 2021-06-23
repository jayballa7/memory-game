// import React, {useState} from 'react';
// import './styles.css';
// import Tile from '../Tile/index.js';

// function Game () {

//     let [tileCards, setTileCards] = useState([<Tile id = {0}/>, <Tile id = {1}/>, <Tile id = {2}/>, <Tile id = {3}/>, <Tile id = {4}/>, <Tile id = {5}/>, <Tile id = {6}/>,<Tile id = {7}/>, <Tile id = {8}/>, <Tile id = {9}/>, <Tile id = {10}/>, <Tile id = {11}/>, <Tile id = {12}/>, <Tile id = {13}/>, <Tile id = {14}/>, <Tile id = {15}/>, <Tile id = {16}/>, <Tile id = {17}/>, <Tile id = {18}/>, <Tile id = {19}/>]);


//     return (
//         <div className = "game-wrapper">
//             <div className = "tiles-div">
//                 {tileCards}
//             </div>
//         </div>
//     )
// }

// export default Game;

import React, {useState} from 'react';
import update from 'immutability-helper';
import './styles.css';
import Tile from '../Tile/index.js';
import faces from '../Faces/index.js';
import controller from '../../img/controller.png';
import donkeykong from '../../img/donkeykong.jpg';

function Game () {

    let characters = faces;
    
    const cardClick = (id) => {
        let idx = id;
        let newDeck = [...tileCards];
        newDeck[idx] = <Tile image = {donkeykong} />;
        setTileCards(newDeck);
    }

    let initialState = [
        <Tile key = {0} id = {0} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {1} id = {1} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {2} id = {2} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {3} id = {3} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {4} id = {4} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {5} id = {5} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {6} id = {6} image = {controller} cardClick = {cardClick}/>,
        <Tile key = {7} id = {7} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {8} id = {8} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {9} id = {9} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {10} id = {10} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {11} id = {11} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {12} id = {12} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {13} id = {13} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {14} id = {14} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {15} id = {15} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {16} id = {16} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {17} id = {17} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {18} id = {18} image = {controller} cardClick = {cardClick}/>, 
        <Tile key = {19} id = {19} image = {controller} cardClick = {cardClick}/>
    ]

    let [tileCards, setTileCards] = useState(initialState);

    // console.log(tileCards[0].props.image);
    // console.log(tileCards[1].props.id);

    // const updateImage = (index) => {
    //     // setTileCards(<Tile id = {0} image = {faces[0]} />)
    //     let newDeck = [...tileCards]; // copying the old datas array
    //     newDeck[index] = <Tile image = {characters[0]} />; // replace e.target.value with whatever you want to change it to
    //     setTileCards(newDeck); 
    //     console.log(newDeck);
    // }

    // let updateImage = () => {
    //     let index = 0;
    //     let newDeck = [...tileCards];
    //     newDeck[index] = <Tile image = {donkeykong} />
    //     setTileCards(newDeck)

        // let index = 0;
        // let newDeck = update(tileCards, {
           
             
        //       [index]: {
                      
        //         image: { $set: donkeykong}
        //        }
            
        
        // });
        // setTileCards(newDeck);

    //   }

    return (
        <div className = "game-wrapper">
            <div className = "tiles-div">
                {tileCards}
            </div>
        </div>
    )
}

export default Game;