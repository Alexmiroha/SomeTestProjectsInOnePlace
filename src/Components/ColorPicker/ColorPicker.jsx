import React from 'react';

const ColorPicker = () => {
    return (
        <div>
            <h2>Choose color, please, to add it to the list</h2>
            <div>
                <input type="color"/>
                <input type="text"/>
            </div>
            <div>
                color1
                color2
            </div>
            <div>
                <input type="checkbox"/>
            </div>
            <div>
                <button>task</button>
            </div>
        </div>
    );
};

export default ColorPicker;
