import { FaArrowRight } from 'react-icons/fa6'
import './home.css'
import { changeActiveSearch } from '../../App'

const Home = () => {
  return (
    <main className='main__info'>
      <div className='img'>
        <img
          src='https://yeremigonzalez-portfolio.netlify.app/photo1.jpg'
          alt=''
        />
      </div>
      <div className='info'>
        <h1>Yeremi González</h1>
        <span>Desarrollador Front-End</span>
        <p>
          Desarrollador web junior especializado en React.js, listo para dar el
          siguiente paso. Con un año de experiencia, he mejorado mis habilidades
          en el desarrollo de aplicaciones web interactivas y eficientes.
          Siempre estoy buscando nuevas oportunidades para crecer, aprender y
          aportar valor al equipo.
        </p>

        <button onClick={() => changeActiveSearch()}>
          Press <kbd>ctrl</kbd> <kbd>k</kbd> to start
          <FaArrowRight />
        </button>
      </div>
    </main>
  )
}

export default Home
