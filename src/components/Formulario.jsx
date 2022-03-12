import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PropTypes } from 'prop-types'

const Formulario = ({ setCitas, citas }) => {
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''

  })
  const [error, setError] = useState(false)
  const {
    mascota,
    propietario,
    fecha,
    hora,
    sintomas
  } = cita

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setError(true)
      return true
    }
    setError(false)
    cita.id = uuidv4()
    setCitas([
      ...citas,
      cita
    ])

    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <>
      <h2>Crear Citas</h2>

      {
        error && <p className='alert-error'>Todos los campos son obligatorios</p>
      }
      <form onSubmit={handleSubmit}>
        <label>
          <p className='label__title'>Nombre de Mascota</p>
          <input
            className='form__input-cita'
            type='text'
            name='mascota'
            placeholder='Nombre Mascota'
            value={mascota}
            onChange={handleChange}
          />
        </label>
        <label>
          <p className='label__title'>Nombre del Dueño</p>
          <input
            className='form__input-cita'
            type='text'
            name='propietario'
            placeholder='Nombre del Dueño'
            value={propietario}
            onChange={handleChange}
          />
        </label>
        <label>
          <p className='label__title'>Fecha</p>
          <input
            className='form__input-cita'
            type='date'
            name='fecha'
            placeholder='Fecha de entrada'
            value={fecha}
            onChange={handleChange}
          />
        </label>
        <label>
          <p className='label__title'>Hora</p>
          <input
            className='form__input-cita'
            type='time'
            name='hora'
            placeholder='Hora de llegada'
            value={hora}
            onChange={handleChange}
          />
        </label>
        <label>
          <p className='label__title'>Síntomas</p>
          <textarea
            className="textarea"
            name='sintomas'
            value={sintomas}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit' className='btn btn-success'>Agregar Citas</button>
      </form>
    </>
  )
}

Formulario.propTypes = {
  setCitas: PropTypes.func.isRequired,
  citas: PropTypes.array.isRequired
}

export default Formulario
