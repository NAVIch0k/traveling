import React from "react";
import Header from "../Header/Header";
import NavigationImd from "./NavigationImg/NavigationImd";
import Description from "./Description/Description";
import PopularPlace from "./PopularPlace/PopularPlace";
import Itinerary from "./Itinerary/Itinerary";

const Main=()=>{
    return(
        <>
            <Header/>
            <NavigationImd/>
            <Description/>
            <PopularPlace/>
            <Itinerary/>
        </>
    )
}

export default Main