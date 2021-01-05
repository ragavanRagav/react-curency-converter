import React, { useRef } from 'react'

export default function ConvertCurency() {
    const BcurName = useRef();
    const BcurValue = useRef();
    const ScurName = useRef();
    const ScurValue = useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        let Scurency = localStorage.getItem("currencyValue")
        ScurValue.current.value=(BcurValue.current.value*Scurency);
    }
    return (
        <div>
            <div className="form">
                <form onSubmit={e=>handleSubmit(e)}>
                    <div className="spaceBetween">
                        <label htmlFor='bcurName'>Base Currency : </label>
                        <input type="text" name="bcurName" id="BcurName" ref={BcurName} />
                    </div>
                    <div className="spaceBetween">
                        <label htmlFor='bcurValue'>Value of Base Currency : </label>
                        <input type="Number" name="bcurValue" id="bcurValue" ref={BcurValue} />
                    </div>
                    <div className="spaceBetween">
                        <label htmlFor='scurName'>Secondary Currency : </label>
                        <input type="text" name="scurName" id="scurName" ref={ScurName} />
                    </div>
                    <button type="submit" className="subBtn">Convert</button>
                    <div className="spaceBetween">
                        <label htmlFor='scurValue'>Equivalent value : </label>
                        <input type="Number" name="scurValue" id="scurValue" ref={ScurValue} />
                    </div>
                </form>
            </div>
        </div>
    )
}
