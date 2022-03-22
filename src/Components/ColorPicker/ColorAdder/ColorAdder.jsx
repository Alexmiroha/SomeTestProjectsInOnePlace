import React from 'react';

const ColorAdder = ({handleInput, color, addColor}) => {

    return (
        <div>
            <h2>Choose color, please, to add it to the list</h2>
            <div>
                <input type="color" value={color} onChange={handleInput}/>
                <input type="text" value={color} onChange={handleInput}/>
                <button onClick={addColor}>add color</button>
            </div>
        </div>
    );
};

export default ColorAdder;
