import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import './projects.css';
import { projectList } from '../../../utils';

const Projects = () => {
  return (
    <main className='project_container'>
      <div className='projects_info'>
        <h2>Pasión. Aprendizaje. Descubrir.</h2>
        <p>🚧 Proyectos en desarrollo
        <br />
        Actualmente estoy trabajando en nuevos proyectos personales que pronto verán la luz. Mientras tanto, te invito a explorar mi experiencia laboral y formación académica para conocer mejor mi trabajo.</p>
      </div>

      <div className='projects'>
        {/* <h3>Todos los proyectos</h3> */}
        <div className='projects_content'>
          {projectList.map((item) => (
            <div
              className='project'
              key={item.title}
              // to={item.url}
              // target='_blank'
            >
              <div className='info_proj'>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <Link to={item.url} target='_blank' className='visit'>
                  Visitar Proyecto <FaArrowRight />
                </Link>
              </div>
              <img
                src={`${item.img}`}
                alt={`imagen del projecto: ${item.title}`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
