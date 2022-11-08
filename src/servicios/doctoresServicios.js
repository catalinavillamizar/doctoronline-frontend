const doctores = [
    {
        nombre: "Carlos Diaz",
        especialidad: "Otorrinolaringología",
      
    }, 
    {
        nombre: "Paola Perez",
        descripcion: "Ginecología",
        
    }
]

const doctoresServicios = {};

doctoresServicios.obtenerDoctores = () => {
    return doctores;
}

export default doctoresServicios;