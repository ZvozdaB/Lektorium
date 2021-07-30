import React from 'react';
import InputCheckbox from '../Input/InputCheckbox';
import InputEmail from '../Input/InputEmail';
import InputPassword from '../Input/InputPassword';
import './Form.css'


function Form(props) {

    return (
        <form className="form" noValidate >
            <div className="form__titel">
                Sign in to your account
            </div>
            <InputEmail email={props.email} blureHandler={props.blureHandler} />
            <InputPassword password={props.password} blureHandler={props.blureHandler}/>
            <InputCheckbox/>
            <button type="submit" id="submit" className="btn-submit" onClick={e => props.Submit(e)} >Continue</button>
            <a href="https://www.google.com.ua/maps/" className="form__single">Use single sing-on (Google) instead</a>
        </form>
    )
}
export default Form;