const Login = () => {
    return (
        <div className="container mt-3">
            <h2>Mi cuenta</h2>
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label for="email">Correo:</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingrese su correo" name="email"/>
                </div>
                <div className="mb-3">
                    <label for="pwd">Contraseña:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Ingrese su contraseña" name="pswd"/>
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember"/> Recordarme
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>



    )

}

export default Login;