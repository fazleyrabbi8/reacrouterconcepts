import useInputState from "../Hook/inpustate";


const Hookform = () => {

    const emailState = useInputState('a@b.com')

    // const [name , handleNameChange] = useInputState('Rojoni Hooked')

    const handleSubmit = e => {

        console.log('Form Data' , emailState.value)
        e.preventDefault()
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
{/* 
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br /> */}


                <input
                
                {...emailState}
                    type="email" name="email" />
                <br />

                <input
                   type="password" name="password"  />

                <br />
                <input type="submit" value="Submit" />            </form>

        </div>
    );
};

export default Hookform;