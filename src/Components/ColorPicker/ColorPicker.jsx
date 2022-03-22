import React, {useState} from 'react';
import ColorAdder from "./ColorAdder/ColorAdder";
import AddedColors from "./AddedColors/AddedColors";
import Filter from "./Filter/Filter";
import Task from "./Task/Task";

const ColorPicker = () => {

    const [color, setColor] = useState('#fff')
    const [addedColors, setAddedColor] = useState([])

    const handleInput = (e) => {
        setColor(e.target.value)
    }
    const addColor = () => {
        setAddedColor(addedColors => [...addedColors, color])
    }

    return (
        <div>
            <ColorAdder handleInput={handleInput} color={color} addColor={addColor}/>
            <AddedColors addedColors={addedColors}/>
            <Filter/>
            <Task/>
        </div>
    );
};

export default ColorPicker;
