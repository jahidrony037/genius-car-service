import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h3>Please Login Here</h3>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google sign in</button>
        </div>
    );
};

export default Login;