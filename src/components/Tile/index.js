import React from 'react';
import './styles.css';

function Tile(props) {
    return(
        <div className="tile-wrapper">
            <div className="img-div">
                <img src = {props.image} alt = {"tile"} className = "tile-img"/>
            </div>
        </div>
    )
}
export default Tile;