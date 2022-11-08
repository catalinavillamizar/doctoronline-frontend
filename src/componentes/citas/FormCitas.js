const FormCitas = () => {
    
    return (
        <div className="container">
            <div className="container-lg text-info">
                <h1>Agende su cita</h1>
                <p>Introduzca la información requerida en los espacios para agendar citas de manera exitosa.</p>
                <hr></hr>
            </div>
            
            <div className="container mt-3">
            <h2>Programación de citas</h2>
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label for="email">ID paciente</label>
                    <input type="email" className="form-control" id="email" placeholder="Identificación del paciente" name="email"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="email">Nombre del Paciente</label>
                    <input type="email" className="form-control" id="email" placeholder="Nombre del paciente" name="email"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="email">Fecha de consulta</label>
                    <input type="email" className="form-control" id="email" placeholder="Día/Mes/Año" name="email"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="email">Hora de consulta</label>
                    <input type="email" className="form-control" id="email" placeholder="00:00" name="email"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="email">Especialidad</label>
                    <input type="email" className="form-control" id="email" placeholder=" " name="email"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="email">Médico especialista</label>
                    <input type="email" className="form-control" id="email" placeholder=" " name="email"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Programar cita</button>
            </form>
        </div>
        </div>
        

    )

}

export default FormCitas;