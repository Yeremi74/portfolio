import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6';
import './projectGallery.css';

const ProjectGallery = ({ isOpen, title, images, index, onClose, onNavigate }) => {
  const stageRef = useRef(null);

  const goPrev = useCallback(() => {
    if (images.length <= 1) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [images.length, index, onNavigate]);

  const goNext = useCallback(() => {
    if (images.length <= 1) return;
    onNavigate((index + 1) % images.length);
  }, [images.length, index, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  useEffect(() => {
    if (!isOpen) return;
    stageRef.current?.focus?.();
  }, [isOpen, index]);

  if (!isOpen || !images?.length) return null;

  const currentSrc = images[index];
  const showNav = images.length > 1;

  const content = (
    <div
      className='project-gallery'
      role='dialog'
      aria-modal='true'
      aria-label={title ? `Galería: ${title}` : 'Galería de imágenes'}
    >
      <div
        ref={stageRef}
        className='project-gallery__backdrop'
        tabIndex={-1}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <button
          type='button'
          className='project-gallery__close'
          onClick={onClose}
          aria-label='Cerrar galería'
        >
          <FaXmark aria-hidden />
        </button>

        {showNav && (
          <button
            type='button'
            className='project-gallery__nav project-gallery__nav--prev'
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label='Imagen anterior'
          >
            <FaChevronLeft aria-hidden />
          </button>
        )}

        <div className='project-gallery__frame' onMouseDown={(e) => e.stopPropagation()}>
          <img
            src={currentSrc}
            alt={`${title ? `${title} — ` : ''}Captura ${index + 1} de ${images.length}`}
            decoding='async'
            className='project-gallery__img'
          />
        </div>

        {showNav && (
          <button
            type='button'
            className='project-gallery__nav project-gallery__nav--next'
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label='Imagen siguiente'
          >
            <FaChevronRight aria-hidden />
          </button>
        )}

        {showNav && (
          <div className='project-gallery__counter' aria-live='polite'>
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

ProjectGallery.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default ProjectGallery;
