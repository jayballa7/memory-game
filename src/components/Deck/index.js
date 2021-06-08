import controller from '../../img/controller.png';

var deck = [];

var createDeck = function() {
    for(var i = 0; i < 20; i++) {
        var obj = {
            "id": i,
            image: controller
        };
        deck.push(obj);
    }
}

createDeck();

export default deck;

// const Deck = ({ handleClick }) => {

//   const [faceDown, isFaceDown] = useState(false);

//   const toggleImage = () => {
//     isFaceDown(!faceDown);
//     handleClick();
//   }

//   const deck = [
//       {
//           id: 0,
//           image: faceDown ? controller : donkeykong
//       }
//     ];
//   return (
//     <div>
//       <div onClick={toggleImage}>
//         {deck}
//       </div>
//     </div>
//   )
// }

// export default Deck;
