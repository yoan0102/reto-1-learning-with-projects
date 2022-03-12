import { PropTypes } from 'prop-types'
const Cita = ({ cita, setCitas, citas }) => {
  const {
    mascota,
    propietario,
    fecha,
    hora,
    sintomas
  } = cita

  const handleClick = () => {
    const resultCitas = citas.filter(item => item.id !== cita.id)
    setCitas(resultCitas)
  }

  return (
    <article className="card">
      <p className="card__title">Mascota: <span>{mascota}</span></p>
      <div className="card__container">
        <p>Propietario: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>sintomas: <span>{sintomas}</span></p>
        <button
          onClick={handleClick}
          className="btn btn-danger"
        >Eliminar &times;
        </button>
      </div>
    </article>
  )
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  setCitas: PropTypes.func.isRequired,
  citas: PropTypes.array.isRequired
}

export default Cita
