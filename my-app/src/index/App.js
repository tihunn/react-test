import './App.css';
import NavBar from "../components/NavBar/NavBar";
import Content from "../components/Content/Content";
import HeaderContainer from "../components/Header/HeaderContainer";

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
