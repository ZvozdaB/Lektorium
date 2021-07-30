import React from 'react';
import './input.css';


function InputPassword({ password, blureHandler}){

    let passwordError = (password.passwordError && password.passwordON) ? <div className="input-error_text">{password.passwordError}</div> : "";
    let inputClass = (password.passwordError && password.passwordON) ? "form__input input-error " : "form__input";
    return(
        <div className="form__item">
            <div className="input__text"> 
                <label htmlFor="uzer-password" className="input__label">Password</label>
                <a href="https://www.google.com/" className="input__forgot">Forgot your password?</a>
            </div>
            <input value={password.password} 
                onChange={password.addPassword} 
                onBlur={e => blureHandler(e)}
                className={inputClass}
                type="password"  id="uzer-password" name="uzer-password"/>
            {passwordError}
        </div>
    )
}
export default InputPassword;