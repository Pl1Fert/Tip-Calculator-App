import "./styles/App.css";
import logo from "./images/logo.svg";
import Calculator from "./components/Calculator/Calculator";

function App() {
    return (
        <div className="App">
            <img src={logo} alt="logo" />
            <Calculator />
        </div>
    );
}

export default App;
