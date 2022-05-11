import './App.css';
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import Main from "./Components/Main/Main";
import LifeCiti from "./Components/LifeCiti/LifeCiti";
import Parks from "./Components/Parks/Parks";
import Attractions from "./Components/Attractions/Attractions";
import Itineraries from "./Components/Itineraries/Itineraries";
import Account from "./Components/Account/Account";

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
                <Route path={'/itineraries'} render={()=><Itineraries/>}/>
                <Route path={'/user'} render={()=><Account/>}/>
                <Route path='*' render={() => alert("404")}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
