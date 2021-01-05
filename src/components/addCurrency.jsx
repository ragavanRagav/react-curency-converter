import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';

export default function AddCurrency() {

    const curName = useRef();
    const curValue = useRef();
    // const history = useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("currencyName", curName.current.value);
        localStorage.setItem("currencyValue", curValue.current.value);
        window.location ='/convert';
    }
    return (
        <div>
            <div className="form">
                <form onSubmit={e=>handleSubmit(e)}>
                    <div className="spaceBetween">
                        <label htmlFor='curName'>Currency Name : </label>
                        <input type="text" name="curName" id="curName" ref={curName} required />
                    </div>
                    <div className="spaceBetween">
                        <label htmlFor='curValue'>Value : </label>
                        <input type="Number" name="curValue" id="curValue" ref={curValue} required />
                    </div>
                    <button type="submit" className="subBtn">SAVE</button>
                </form>
            </div>
        </div>
    )
}
