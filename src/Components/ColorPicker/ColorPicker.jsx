import React, {useState} from 'react';

const ColorPicker = () => {

    const [color, setColor] = useState('#fff')
    const [addedColor, setAddedColor] = useState([])

    const handleInput = (e) => {
        setColor(e.target.value)
    }
    const addColor = () => {
        setAddedColor(color)
    }

    return (
        <div>
            <h2>Choose color, please, to add it to the list</h2>
            <div>
                <input type="color" value={color} onChange={handleInput}/>
                <input type="text" value={color} onChange={handleInput}/>
                <button onClick={addColor}>add color</button>
            </div>
            <div>
                {addedColor}
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
