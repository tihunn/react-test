import './App.css';
import NavBar from "./components/NavBar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/header/HeaderContainer";

function App(props) {

    return (
        <div className="main-app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <Content/>
        </div>
    );
}

export default App;
