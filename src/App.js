import './App.css';
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import Main from "./Components/Main/Main";
import LifeCiti from "./Components/Main/LifeCiti/LifeCiti";
import Parks from "./Components/Main/Parks/Parks";
import Attractions from "./Components/Main/Attractions/Attractions";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/main'}/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/login'} render={() => <LogIn/>}/>
                <Route path={'/main'} render={() => <Main/>}/>
                <Route path={'/lifeciti'} render={()=><LifeCiti/>}/>
                <Route path={'/parks'} render={()=><Parks/>}/>
                <Route path={'/attractions'} render={()=><Attractions/>}/>
                <Route path='*' render={() => alert("404")}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
