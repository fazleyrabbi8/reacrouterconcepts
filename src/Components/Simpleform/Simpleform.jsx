import { useState } from "react";


const Simpleform = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('')



    const handleSubmit = e => {

        e.preventDefault();

        if (password.length < 6) {
            setError('Password Must be 6 Charecters Or longer')
        }
        else {
            setError('');
            console.log(name, email, password);
        }

    };

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailSubmit = e => {

        // console.log(e.target.value);
        setEmail(e.target.value)
    };

    const handlePasswordChange = e => {

        // console.log(e.target.value);
        setPassword(e.target.value);

    }


    return (
        <div>


            <form onSubmit={handleSubmit}>

                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />


                <input

                    onChange={handleEmailSubmit}
                    type="email" name="email" />
                <br />

                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" required />

                <br />
                <input type="submit" value="Submit" />            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default Simpleform;