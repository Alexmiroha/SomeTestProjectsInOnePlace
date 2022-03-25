import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {Routes, Route} from "react-router-dom";
import ColorPicker from "./Components/ColorPicker/ColorPicker";
import Calendar from "./Components/Calendar/Calendar";
import React from "react";

const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
            <Route path="/colorPicker" element={<ColorPicker />}/>
            <Route path="/calendar" element={<Calendar />}/>
        </Routes>
    </div>
  );
}

export default App