import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content/Content";

function App(props) {
    return (
        <div className="main-app-wrapper">
            <Header/>
            <NavBar/>
            <Content data={props.data}/>
        </div>
    );
}

export default App;
