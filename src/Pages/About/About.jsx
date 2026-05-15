import { FaDownload } from 'react-icons/fa'
import './about.css'
const About = () => {
  return (
    <main className='about__container'>
      <h2>Crear. Compartir. Repetir.</h2>
      <div className='about__info'>
        {/* <div className='img_container'>
          <img src='https://yeremiportafolio.netlify.app/photo2.jpg' alt='' />
        </div> */}
        <div className='about__info__text_container'>
          <p>
            Soy Yeremi, desarrollador Full Stack y estudiante de Informática.
          </p>
          <p>
            Me enfoco en construir aplicaciones web con React y Node.js:
            integrar APIs y optimizar el rendimiento de sistemas en producción.
          </p>
          <p>
            Gran parte de mi experiencia la he construido de forma autodidacta,
            en proyectos donde participé en la evolución de sistemas desde un
            MVP hasta versiones escalables.
          </p>
          <p>
            Me interesa desarrollar software funcional, eficiente y fácil de
            usar, con foco en la calidad técnica y la experiencia de usuario.
          </p>
        </div>
      </div>
      <div className='bio__info'>
        <span>Bio</span>
        <p className='desc'>
          La curiosidad y el aprendizaje continuo me empujan a mejorar cada
          entrega: código claro, decisiones técnicas justificadas y productos
          que la gente pueda usar sin fricción.
        </p>
        <a
          href='/CV Yeremi Gonzalez.pdf'
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
