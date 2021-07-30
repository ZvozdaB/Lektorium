import React from 'react';
import './input.css';


function InputEmail({ email, blureHandler}){
    
    let emailError = (email.emailError && email.emailON) ? <div className="input-error_text">{email.emailError}</div> : "";
    let inputClass = (email.emailError && email.emailON) ? "form__input input-error " : "form__input";
    
    return(
        <div className="form__item">
            <label htmlFor="uzer-email" className="input__label" >Email</label>
            <input value={email.email} 
                onChange={e => email.addEmail(e)} 
                onBlur={e => blureHandler(e)}
                className={inputClass}
                type="email"  id="uzer-email" name="uzer-email"/>
            {emailError}
        </div>
    )
}
export default InputEmail;