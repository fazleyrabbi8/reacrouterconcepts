import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{

        nameRef.current.focus() ;
    },[])

    const handleSubmit = e => {

        e.preventDefault();

        console.log(nameRef.current.value)
        console.log(mailRef.current.value)
        console.log(passwordRef.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input ref={nameRef} type="text" name="name" />
                <br />


                <input ref={mailRef} defaultValue={'a@b.com'} type="email" name="email" />
                <br />

                <input ref={passwordRef} type="password" name="password" required />

                <br />
                <input type="submit" value="Submit" />            </form>
        </div>
    );
};

export default RefForm;