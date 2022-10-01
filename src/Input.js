import React from 'react'
import errorImg from "./images/icon-error.svg"
function Input(prop)
{

    const [error, setError] = React.useState(null);

    const handleChange = (event) =>
    {
        if (event.target.value === "") {
            setError(!error);
        }
        else {
            setError(error);
        }
    }


    return (
        <div className="relative w-full">
            <input type={prop.type} placeholder={prop.placeholder} className="w-full border-[1px] font-xl capitalize border-Grayish-Blue rounded p-3 placeholder:font-lg text-Dark-Blue" name={prop.name} required="true" onChange={handleChange} />
            {error && <img src={errorImg} alt="error img" className=" absolute top-0 bottom-0 translate-y-1/2 right-2" />}
            {error && <p className="text-Red text-[10px] text-right  justify-end w-full font-xl italic">{prop.message}!</p>}
        </div>
    )
}

export default Input
