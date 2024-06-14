import React from 'react';

const ReusableForm = ({ formtitle, handleSubmit, submitbtn = 'Submit' , children }) => {

    const handlelocalSubmit = e => {

        e.preventDefault();

        const data = {
            name: e.target.name.value,
           
            password: e.target.password.value
        }

        // handleSubmit(data);

        // 
        // console.log(data);

    }


    return (
        <div>
           {

            children
           }

            <form onSubmit={handlelocalSubmit}>

                <input type="text" name="name" />
                <br />

                <input
                    type="password" name="password" />

                <br />
                <input type="submit" value={submitbtn} />            </form>

        </div>
    );
};

export default ReusableForm;