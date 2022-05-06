import './App.css';
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/registration'}/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/login'} render={() => <LogIn/>}/>
                <Route path='*' render={() => alert("404")}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
