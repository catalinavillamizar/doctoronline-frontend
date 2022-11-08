import doctoresServicios from "../../servicios/doctoresServicios";

const ListaDoctores = () => {

  const ListaDoctores = doctoresServicios.obtenerDoctores();

  return (
      <div className="container">
          <h3>Lista de doctores <a href="/doctores/form" className="btn btn-sm btn-success">Agregar nuevo</a></h3>
          <table className="table table-sm table-bordered table-hover" >

              <thead>
                  <tr className= "table-success text-center">
                      <th>Nombre</th>
                      <th>Especialidad</th>
                      <th>Pefil</th>
                      <th>Acciones</th>
                  </tr>
              </thead>
              <tbody className="text-center">
                  {
                      ListaDoctores.map((doctores) => (
                          <tr>
                              <td>{doctores.nombre}</td>
                              <td>{doctores.descripcion}</td>
                              <td><a className="btn btn-info btn-sm me-1" href="/doctores/:id">Ver Perfil</a>
                              </td>
                              <td>
                                  <button className="btn btn-primary btn-sm me-1">Editar</button>
                                  <button className="btn btn-danger btn-sm">Eliminar</button>
                              </td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
      </div>
  );
}

export default ListaDoctores;