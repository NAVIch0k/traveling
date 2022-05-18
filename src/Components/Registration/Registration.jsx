import React, {useEffect} from 'react';
import RegistrationForm from "./RegistrationForm";
import {RegistrationSend} from "../../Store/User";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

export const Registration = (props) => {

    let history = useHistory()

    useEffect(() => {
        if (props.id) {
            history.push('/main')
        }
    }, props.id)

    let registration=(data)=>{
        props.RegistrationSend(data)
    }

    return (
        <RegistrationForm onSubmit={registration}/>
    );
};

let mapStateToProps=(state)=>({
    id:state.user.user_id
})

export default  connect(mapStateToProps,{RegistrationSend})(Registration)
