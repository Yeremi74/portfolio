import { FaArrowRight } from 'react-icons/fa6';
import './home.css';
import { changeActiveSearch } from '../../App';

const Home = () => {
  return (
    <main className='main__info'>
      {/* <div className='img'>
        <img src='https://yeremiportafolio.netlify.app/photo1.jpg' alt='' />
      </div> */}
      <div className='info'>
        <h1>Yeremi González</h1>
        {/* <span>Desarrollador Front-End</span> */}
        <p>
        
<b>Desarrollador Full Stack especializado en React y Node.js.</b>
<br />
Construyo aplicaciones web enfocadas en rendimiento, escalabilidad y experiencia de usuario.
Experiencia integrando APIs y optimizando sistemas frontend y backend en proyectos reales.
        </p>

        <button onClick={() => changeActiveSearch()}>
          Presiona <kbd>ctrl</kbd> <kbd>k</kbd> para iniciar
          <FaArrowRight />
        </button>
      </div>
    </main>
  );
};

export default Home;
