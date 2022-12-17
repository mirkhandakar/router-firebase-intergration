import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please register</h3>
            <form>
                <input type="text" name="" placeholder='Your name' id="" />
                <br />
                <input type="email" name="" placeholder='Enter email address' id="" />
                <br />
                <input type="password" name="" placeholder='Enter Password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;