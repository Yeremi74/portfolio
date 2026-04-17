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
        
<b>Desarrollador FullStack especializado en React y Node.</b>
<br />
Construyo aplicaciones web escalables, integro APIs externas y optimizo la experiencia del usuario. Me motiva resolver problemas reales, trabajar en equipo y seguir aprendiendo con cada proyecto.
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
