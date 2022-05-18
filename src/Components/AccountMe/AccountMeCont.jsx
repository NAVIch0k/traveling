import React from "react";
import AccountMe from "./AccountMe";
import Header from "../Header/Header";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirecr";
import {connect} from "react-redux";
import {DeleteSend} from "../../Store/User";

const AccountMeCont = (props) => {

    let logOut = () => {
        props.DeleteSend(props.id)
    }

    return (
        <>
            <Header/>
            <AccountMe logOut={logOut}/>
        </>
    )
}

let mapStateToProps=(state)=>({
    id:state.user.user_id
})

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps,{DeleteSend})
)(AccountMeCont)