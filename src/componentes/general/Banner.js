import bannerdoc from "../imagenes/bannerdoc.jpg"
import citamedica from "../imagenes/citamedica.jpg"
import equipoesp from "../imagenes/equipoesp.jpg"

const Banner = () => {
    return (
        <div className="container"> 
                  
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={bannerdoc} alt="doctor" width="100%" height="600"/>
                    <div className="container">
                    <div className="carousel-caption text-start">
                            <h1>Doctor Online</h1>
                            
                            <p>Ofrecemos servicios de salud en medicina especializada</p>
                            <p><a className="btn btn-md btn-primary" href="/especialidades">Ver nuestras especialidades</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={equipoesp} alt="doctor" width="100%" height="600"/>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Profesionales especializados</h1>
                            <p>Contamos un amplio directorio de médicos especializados</p>
                            <p><a className="btn btn-md btn-success" href="/doctores">Consultar Doctores</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={citamedica} alt="doctor" width="100%" height="600"/>

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Programación de citas</h1>
                            <p>Programe una cita médica especializada</p>
                            <p><a className="btn btn-md btn-info" href="/citas">Angendar cita</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
        </div>
    );
}

export default Banner;