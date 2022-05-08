import './App.css';
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import Main from "./Components/Main/Main";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/main'}/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/login'} render={() => <LogIn/>}/>
                <Route path={'/main'} render={() => <Main/>}/>
                <Route path='*' render={() => alert("404")}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
