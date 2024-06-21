import { Link } from 'react-router-dom'

function Login() {
    
    return (    
        <div className='d-flex justify-content-center align-items-center vh-100 vw-100 bg-primary'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-2'></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' className='form-control rounded-2'></input>
                    </div>
                    <div>
                        <Link to="/dashboard" button className='btn btn-success w-100 rounded-2'><strong>Log In</strong></Link><br></br>
                        <p>For existing accounts</p>
                        <Link to="/signup" button className='btn btn-default border w-100 bg-light rounded-2 text-decoration-none'><strong>Sign Up</strong></Link>
                        <p>New user?</p>
                    </div>
                </form>           
            </div>
        </div>
    );
}

export default Login
