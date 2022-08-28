import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content/Content";

function App() {
    return (
        <div className="main-app-wrapper">
            <Header/>
            <NavBar/>
            <Content/>

        </div>
    );
}

export default App;
