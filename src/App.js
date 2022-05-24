import './App.css';
import Footer from "./Components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./Components/Main/Main";
import LifeCiti from "./Components/LifeCiti/LifeCiti";
import Parks from "./Components/Parks/Parks";
import Attractions from "./Components/Attractions/Attractions";
import Itineraries from "./Components/Itineraries/Itineraries";
import InfoAboutPlace from "./Components/InfoAboutPlace/InfoAboutPlace";
import Registration from "./Components/Registration/Registration";
import LogIn from "./Components/LogIn/LogIn";
import {useEffect} from "react";
import {AuthMe} from "./Store/User";
import {connect} from "react-redux";
import AccountMeCont from "./Components/AccountMe/AccountMeCont";
import AccountCont from './Components/Account/AccountCont';
import BecomeGuideCont from './Components/BecomeGuide/BecomeGuideCont'

import Slider from './Components/InfoAboutPlace/Slider/Carousel'

function App(props) {

    useEffect(() => {
        props.AuthMe()
    }, [])

    return (
        <div className="app">
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/registration'}/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/login'} render={() => <LogIn/>}/>
                <Route path={'/main'} render={() => <Main/>}/>
                <Route path={'/lifeciti'} render={() => <LifeCiti/>}/>
                <Route path={'/parks'} render={() => <Parks/>}/>
                <Route path={'/attractions'} render={() => <Attractions/>}/>
                <Route path={'/itineraries'} render={() => <Itineraries/>}/>
                <Route path={'/user'} render={() => <AccountCont/>}/>
                <Route path={'/userme'} render={() => <AccountMeCont/>}/>
                <Route path={'/aboutplace'} render={() => <InfoAboutPlace/>}/>
                <Route path={'/becomeGuide'} render={() => <BecomeGuideCont/>}/>
                <Route path='*' render={() => alert("404")}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default connect(null,{AuthMe})(App);
