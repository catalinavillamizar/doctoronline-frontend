const Header = () => {
    return (

        <header className="px-3 py-2 text-bg-info">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <span className="fs-4"><i className="bi bi-people"></i>             Doctor Online</span>
              </a>
    
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="/" className="nav-link text-secondary text-center"><i className="bi bi-house" width="24" height="24" ></i> <br></br>                
                  Inicio
                  </a>
                </li>
                <li>
                  <a href="/especialidades" className="nav-link text-white text-center">
                    <i className="bi bi-search" width="24" height="24"></i><br></br>
                    Especialidades
                  </a>
                </li>
                <li>
                  <a href="/doctores" className="nav-link text-white text-center">
                  <i className="bi bi-clipboard2-plus" width="24" height="24" ></i><br></br>
                    Doctores 
                    </a>
                </li>
                <li>
                  <a href="/citas" className="nav-link text-white text-center"> <i className="bi bi-calendar3" width="24" height="24"></i><br></br>
                  Citas
                  </a>
                </li>
                <li>
                  <a href="/micuenta" class="nav-link text-white text-center">
                  <i className="bi bi-person-circle" width="36" height="36"></i><br></br>
                    Mi cuenta
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </header>
    

    )
}

export default Header;