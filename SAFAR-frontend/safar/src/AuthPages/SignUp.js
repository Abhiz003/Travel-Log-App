import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {

    const [user, setUser] = useState({
        fullName : '',
        username : '',
        email : '',
        mobile : '',
        socialInsta : '',
        socialYoutube : '',
        pass:'',
        confirmPass:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:8080/user', user);
            // Handle the response as needed (e.g., show success message, redirect, etc.)
            console.log('User registered successfully:', result.data);
        } catch (error) {
            // Handle errors (e.g., show error message)
            console.error('Error registering user:', error.message);
        }
    };


    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <b>Full Name:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={user.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Username: </b>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter Username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Email:</b>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Mobile:</b>
                        <input
                            type="number"
                            className="form-control"
                            name="mobile"
                            placeholder="Enter mobile no."
                            value={user.mobile}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Instagram:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="socialInsta"
                            placeholder="Enter Instagram profile link"
                            value={user.socialInsta}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Youtube:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="socialYoutube"
                            placeholder="Enter Youtube Channel link"
                            value={user.socialYoutube}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <b>Password:</b>
                        <input
                            type="password"
                            className="form-control"
                            name="pass"
                            placeholder="Enter Password"
                            value={user.pass}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <b>Confirm Password:</b>
                        <input
                            type="text"
                            className="form-control"
                            name="confirmPass"
                            placeholder="Confirm your password"
                            value={user.confirmPass}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        SIGN UP
                    </button>
                </form>
            </div>
        </>



        // <div className='container'>
        //     <form action="/user" method="post">
        //             <div className="form-group">
        //                 <b >Full Name:</b>
        //                 <input type="text" className="form-control" name="name"   placeholder="Enter name" />
        //             </div>
        //             <div className="form-group">
        //                 <b>username</b>
        //                 <input type="text" className="form-control" name="username"  placeholder="Enter Username" />
        //             </div>
        //             <div className="form-group">
        //                 <b >Email :</b>
        //                 <input type="email" className="form-control" name="email"   placeholder="Enter email" />
        //             </div>
        //             <div className="form-group">
        //                 <b>Mobile: </b>
        //                 <input type="number" className="form-control" name="mobile"  placeholder="Enter mobile no." />
        //             </div>
        //             <div className="form-group">
        //                 <b>Instagram: </b>
        //                 <input type="text" className="form-control" name="social-insta"  placeholder="Enter instagram profile link" />
        //             </div>
        //             <div className="form-group">
        //                 <b>Youtube: </b>
        //                 <input type="text" className="form-control" name="social-youtube" placeholder="Enter Youtube Channel ink" />
        //             </div>
        //             <br></br>
        //             <button type="submit" className="btn btn-primary">SIGN UP</button>


        //         </form>
        // </div>
    )
}

export default SignUp