import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import './projects.css'
import { projectList } from '../../../utils'
const Projects = () => {
  return (
    <main className='project_container'>
      <div className='projects_info'>
        <h2>Pasión. Aprendizaje. Descubrir.</h2>
        <p>
          Mi trayectoria de aprendizaje ha estado impulsada por una obsesión
          incansable por el desarrollo de numerosos proyectos, ya que siempre
          encuentro fascinante la adquisición de nuevos conocimientos a través
          de la creación innovadora. Entre todos estos, {projectList.length} de
          mis proyectos han destacado particularmente por su carácter
          revolucionario.
        </p>
      </div>

      <div className='projects'>
        <h3>Todos los proyectos</h3>
        <div className='projects_content'>
          {projectList.map(item => (
            <Link
              className='project'
              key={item.title}
              to={item.url}
              target='_blank'
            >
              <div className='info_proj'>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span>
                  Visitar Proyecto <FaArrowRight />
                </span>
              </div>
              <img
                src={`${item.img}`}
                alt={`imagen del projecto: ${item.title}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects
