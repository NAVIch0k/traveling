import React, {useState} from "react";
import Account from './Account';
import Header from "../Header/Header";
import Reviews from '../Reviews/Reviews';
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirecr";
import {connect} from "react-redux";
import {DeleteSend} from "../../Store/User";

const AccountCont = () => {

    let [reviewPopup,setReviewPopup]=useState(false)


    return (
        <>
            <Account setReviewPopup={setReviewPopup}/>
            <Reviews reviewPopup={reviewPopup} setReviewPopup={setReviewPopup}/>
        </>
    )
}

export default AccountCont