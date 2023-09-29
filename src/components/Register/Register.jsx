
const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    return (
        <div className="mt-10">
            <div className="mx-auto md:w-1/2">
                <h3 className="text-3xl mb-4">Please Register</h3>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 p-2 rounded-lg" type="email" name="email" placeholder="Email Address" id="" />
                <br />
                    <input className="mb-4 w-3/4 p-2 rounded-lg"  type="password" name="password" placeholder="Password" id="" />
                <br />
                    <input className="mb-4 w-3/4 btn btn-secondary p-2 rounded-lg"  type="submit" value="Register" />
                </form>
            </div>

        </div>
    );
};

export default Register;