import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {Routes, Route} from "react-router-dom";
import ColorPicker from "./Components/ColorPicker/ColorPicker";

const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
            <Route path="/colorPicker" element={<ColorPicker />}/>
        </Routes>
    </div>
  );
}

export default App