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

