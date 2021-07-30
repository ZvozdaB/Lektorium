import React from 'react';
import './input.css';


function InputCheckbox(props) {
    return (
        <div className="form__item ">
            <input type="checkbox" name="signetForAWeek" id="signetForAWeek" className="form__checkbox checkbox"/>
            <label htmlFor="signetForAWeek" className="input__label checkbox"> Stay signed for a week</label>
        </div>
    )
}
export default InputCheckbox;