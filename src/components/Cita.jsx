
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
    <article>
      <p>Mascota: <span>{mascota}</span></p>
      <p>Propietario: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>sintomas: <span>{sintomas}</span></p>
      <button onClick={handleClick}>Eliminar &times;
      </button>
    </article>
  )
}

export default Cita
