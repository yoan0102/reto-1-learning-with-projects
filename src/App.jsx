import { useState, useEffect } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

const App = () => {
  let citasInit = JSON.parse(localStorage.getItem('citas'))
  if (!citasInit) {
    citasInit = []
  }
  const [citas, setCitas] = useState(citasInit)

  useEffect(() => {
    if (citasInit) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  return (
    <>
      <h1>Administrador de citas</h1>
      <main className='container'>
        <section className='admin__citas'>
          <Formulario setCitas={setCitas} citas={citas} />
        </section>
        <section className='admin__citas'>
          {
            citas.length > 0
              ? <h2>Administra tu Cita</h2>
              : <h2>Agrege una Cita</h2>
          }
          {
            citas.map(cita => (

              <Cita
                key={cita.id}
                cita={cita}
                setCitas={setCitas}
                citas={citas}
              />
            )
            )
          }
        </section>
      </main>
    </>
  )
}

export default App
