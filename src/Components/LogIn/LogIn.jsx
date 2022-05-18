import React, {useEffect} from 'react';
import LogInForm from "./LogInForm";
import {LoginSend} from "../../Store/User";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

export const LogIn = (props) => {

    let history = useHistory()

    useEffect(() => {
        if (props.id) {
            history.push('/main')
        }
    }, props.id)

    let login = (data) => {
        props.LoginSend(data)
    }

    return (
        <LogInForm onSubmit={login}/>
    );
};

let mapStateToProps = (state) => ({
    id: state.user.user_id
})

export default connect(mapStateToProps, {LoginSend})(LogIn)
