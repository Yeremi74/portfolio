import { FaDownload } from 'react-icons/fa'
import './about.css'
const About = () => {
  return (
    <main className='about__container'>
      <h2>Crear. Compartir. Repetir</h2>
      <div className='about__info'>
        <div className='img_container'>
          <img
            src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
        <p>
          Soy un joven estudiante, ambicioso y disciplinado, con gran
          motivación. Me gusta asumir nuevos retos que me permitan poner en
          práctica los conocimientos adquiridos, así como aprender cosas nuevas,
          ya que tengo una gran capacidad para un rápido aprendizaje.
          <br />
          <br />
          En mis tiempos libres disfruto de ejercitarme, leer artículos sobre
          diversos temas de programación y diseñar y crear prendas de ropa.
          emergentes que impactan, inspiran y conectan con las personas.
        </p>
      </div>
      <div className='bio__info'>
        <span>Bio</span>
        <p className='desc'>
          Como desarrollador front-end, me apasiona la creación de aplicaciones
          web que no solo cuenten con funcionalidades sobresalientes, sino que
          también ofrezcan una experiencia de usuario intuitiva y accesible. Me
          fascina ver cómo mis ideas cobran vida en cada paso del desarrollo de
          la aplicación. Además, la constante evolución de las tecnologías, ya
          sea a través de nuevos frameworks o librerías, siempre despierta mi
          curiosidad y deseo de aprender. En última instancia, mi objetivo es
          combinar innovación e interactividad para crear soluciones web
          excepcionales.
        </p>
        <a
          href='../../../public/CV Yeremi Gonzalez.pdf'
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
