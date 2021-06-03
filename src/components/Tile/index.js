import React from 'react';
import './styles.css';

function Tile(props) {
    return(
        <div className="tile-wrapper" onClick={() => props.handleClick(props.id)}>
            <div className="img-div">
                <img src = {props.image} alt = {props.name} className = "tile-img"/>
            </div>
        </div>
    )
}

export default Tile;