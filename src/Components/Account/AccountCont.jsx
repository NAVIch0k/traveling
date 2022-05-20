import React, { useState } from "react";
import Account from './Account';
import Reviews from '../Reviews/Reviews';
import Message from "../Message/Message";

const AccountCont = () => {

    let [reviewPopup, setReviewPopup] = useState(false)
    let [messagePopup, setMessagePopup] = useState(false)


    return (
        <>
            <Account setReviewPopup={setReviewPopup} setMessagePopup={setMessagePopup} />
            <Reviews reviewPopup={reviewPopup} setReviewPopup={setReviewPopup} />
            <Message messagePopup={messagePopup} setMessagePopup={setMessagePopup} />
        </>
    )
}

export default AccountCont