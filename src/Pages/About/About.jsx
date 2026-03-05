import { FaDownload } from 'react-icons/fa'
import './about.css'
const About = () => {
  return (
    <main className='about__container'>
      <h2>Crear. Compartir. Repetir.</h2>
      <div className='about__info'>
        <div className='img_container'>
          <img src='https://yeremiportafolio.netlify.app/photo2.jpg' alt='' />
        </div>
        <p>
          Soy Yeremi, desarrollador FullStack y estudiante de Informática.
          <br />
          Me defino por mi curiosidad: gran parte de lo que sé lo he aprendido por mi cuenta, y disfruto cada desafío como una oportunidad para crecer. Creo en el equilibrio entre la disciplina técnica y el trabajo en equipo.
          Fuera del código, me mantengo activo ejercitándome y leyendo sobre tecnología. Son dos actividades que me ayudan a despejar la mente y, paradójicamente, a encontrar nuevas perspectivas para resolver problemas.
          <br />
          Para mí, ser desarrollador no es solo escribir código: es crear, aprender y compartir.
        </p>
      </div>
      <div className='bio__info'>
        <span>Bio</span>
        <p className='desc'>
          Desarrollador FullStack enfocado en crear aplicaciones escalables y experiencias de usuario fluidas.
          Disfruto el desafío de integrar tecnologías, optimizar rendimiento y resolver problemas complejos. La evolución constante del sector me mantiene curioso y en aprendizaje continuo.
          Creo que la mejor tecnología es la que se usa con propósito. Por eso, mi objetivo es construir software con calidad, accesibilidad e impacto real en las personas.

        </p>
        <a
          href='/CV Yeremi Gonzalez2.pdf'
          download='CV Yeremi Gonzalez'
        >
          <FaDownload />
          Descargar CV
        </a>
      </div>
    </main>
  )
}

export default About
