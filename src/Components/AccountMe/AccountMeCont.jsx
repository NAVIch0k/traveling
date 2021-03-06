import React, {useState} from "react";
import AccountMe from "./AccountMe";
import Header from "../Header/Header";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirecr";
import {connect} from "react-redux";
import {DeleteSend} from "../../Store/User";
import EditProfile from "../EditProfile/EditProfile";

const AccountMeCont = (props) => {

    let [editPopUp,setEditPopUp]=useState(false)

    let logOut = () => {
        props.DeleteSend(props.id)
    }

    return (
        <>
            <Header/>
            <AccountMe logOut={logOut} setEditPopUp={setEditPopUp}/>
            <EditProfile editPopUp={editPopUp} setEditPopUp={setEditPopUp}/>
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