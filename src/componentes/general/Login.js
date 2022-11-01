const Login = () => {
    return (
        <form>
            <formgroup className="mb-3" controlId="formBasicEmail">
                <formlabel>Email address</formlabel>
                <formcontrol type="email" placeholder="Enter email" />
                <formtext className="text-muted">
                    We'll never share your email with anyone else.
                </formtext>

                <formgroup className="mb-3" controlId="formBasicPassword">
                <formlabel>Password</formlabel>
                <formcontrol type="password" placeholder="Password" />
            </formgroup>
            <formgroup className="mb-3" controlId="formBasicCheckbox">
                <formcheck type="checkbox" label="Check me out" />
            </formgroup>
            <button variant="primary" type="submit">
                Submit
            </button>
            </formgroup>
        </form>

        

    )

}

export default Login;