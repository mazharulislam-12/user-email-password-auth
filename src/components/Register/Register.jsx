import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {


    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)


    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);


          //register error and success
          setRegisterError('');
          setSuccess('');

        if (!password.length) {
            setRegisterError('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should be at least 6 characters or longer ')
            return;
        }
        else if (!accepted) {
            setRegisterError('please accept out terms and condition')
            return 
        }


        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            setSuccess('user login Successfully.')

            //update profile
            updateProfile(result.user,{
                displayName: name,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
            })
            .then(() => console.log('profile update'))
            .catch()

            //send verification email
            sendEmailVerification(result.user)
            .then(()=>{
                alert('Please check your email and verify your email account')
            })

        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    }

    return (
        <div className="mt-10">
            <div className="mx-auto md:w-1/2">
                <h3 className="text-3xl mb-4">Please Register</h3>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full p-2 rounded-lg" type="text" name="name" placeholder="Your Name" id="" required />

                    <input className="mb-4 w-full p-2 rounded-lg" type="email" name="email" placeholder="Email Address" id="" required />
                <br />
                   <div className="relative mb-4">
                        <input className=" w-full p-2 rounded-lg"
                            type={showPassword ? "text" : "password"} 
                            name="password"
                            placeholder="Password" 
                            id="" required />
                        <span className="absolute top-3 right-2 " onClick={() =>setShowPassword(!showPassword)} >
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                        </span>
                   </div>
                <br />

                <div className="mb-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">Accept Our <a href=""></a> Terms and Condition</label>
                </div>

                <br />
                    <input className="mb-4 w-full btn btn-secondary p-2 rounded-lg"  type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }

                <p> Already Have an account? please  <Link className="text-orange-500 cursor-pointer" to= "/login">Login</Link> </p>

            </div>

        </div>
    );
};

export default Register;