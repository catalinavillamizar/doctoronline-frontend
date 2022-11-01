const Header = () => {
    return (

        <header className="px-3 py-2 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/>
                </svg>
                <span className="fs-4"><i className="bi bi-people"></i>             Doctor Online</span>
              </a>
    
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="/" className="nav-link text-secondary"><i className="bi bi-house justify-content-center mb-1" ></i> <br></br>                
                  Inicio
                  </a>
                </li>
                <li>
                  <a href="/especialidades" className="nav-link text-white">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"/></svg>
                    Especialidades
                  </a>
                </li>
                <li>
                  <a href="/doctores" className="nav-link text-white">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"/></svg>
                    Doctores 
                    </a>
                </li>
                <li>
                  <a href="/citas" className="nav-link text-white"> <i class="bi bi-calendar3 mx-auto mb-1" width="24" height="24"></i><br></br>
                  Citas
                  </a>
                </li>
                <li>
                  <a href="/micuenta" class="nav-link text-white">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#people-circle"/></svg>
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