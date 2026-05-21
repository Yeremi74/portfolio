import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import './projects.css';
import { projectList } from '../../../utils';
import ProjectGallery from '../../Components/ProjectGallery/ProjectGallery';
import { getGalleryImages } from '../../data/projectGalleryAssets';

const galleryForProject = (item) => {
  if (item.imageFolder) {
    const fromFolder = getGalleryImages(item.imageFolder);
    if (fromFolder.length) return fromFolder;
  }
  return item.img ? [item.img] : [];
};

const thumbSrc = (item) => {
  if (item.imageFolder) {
    const fromFolder = getGalleryImages(item.imageFolder);
    if (fromFolder.length) return fromFolder[0];
  }
  return item.img ?? '';
};

const Projects = () => {
  const [gallery, setGallery] = useState(null);

  const openGallery = (item) => {
    const images = galleryForProject(item);
    if (!images.length) return;
    const start = thumbSrc(item);
    let startIndex = start ? images.indexOf(start) : 0;
    if (startIndex < 0) startIndex = 0;
    setGallery({ title: item.title, images, index: startIndex });
  };

  const closeGallery = () => setGallery(null);

  return (
    <main className='project_container'>
      <ProjectGallery
        isOpen={!!gallery}
        title={gallery?.title ?? ''}
        images={gallery?.images ?? []}
        index={gallery?.index ?? 0}
        onClose={closeGallery}
        onNavigate={(next) => setGallery((prev) => (prev ? { ...prev, index: next } : prev))}
      />

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
              <button
                type='button'
                className='project_image_btn'
                onClick={() => openGallery(item)}
                aria-label={`Ver galería de imágenes: ${item.title}`}
              >
                <img
                  src={thumbSrc(item)}
                  alt={`Captura del proyecto: ${item.title}`}
                  loading='lazy'
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
