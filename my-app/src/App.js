import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content/Content";

function App(props) {
    debugger
    return (
        <div className="main-app-wrapper">
            <Header/>
            <NavBar/>
            <Content
                data={props.data}
                newMessagePush={props.newMessagePush}
                onChange={props.onChange}/>
        </div>
    );
}

export default App;
