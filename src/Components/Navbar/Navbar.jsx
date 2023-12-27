import { FiCommand } from 'react-icons/fi'
import { IoHomeOutline, IoCodeSlashOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa6'
import { LuGithub } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import './navbar.css'
import PropTypes from 'prop-types'

const Navbar = ({
  setSearchActive,
  searchActive,
  setMobileMenu,
  mobileMenu
}) => {
  return (
    <div className='navContent'>
      <nav className={`navbar `}>
        <span
          className='close_btn'
          onClick={() => {
            setMobileMenu(!mobileMenu)
            setSearchActive(false)
          }}
        >
          <FiCommand />
        </span>
        <div className={`menu ${mobileMenu && 'open'}`}>
          <div className='logo'>
            <Link to='/'>Yeremi</Link>
          </div>
          <div className='links'>
            <Link to='/about'>sobre mi</Link>
            <Link to='/projects'>proyectos</Link>
            <Link to='/contact'>contactame</Link>
          </div>
          <div className='search' onClick={() => setSearchActive(true)}>
            <FiCommand />
          </div>
        </div>
        {searchActive && (
          <>
            {/* a bg se le cambia a false */}
            <div className='bg' onClick={() => setSearchActive(false)}></div>
            <div className='search__container'>
              <div className='top'>
                <input
                  type='text'
                  placeholder='Escribe un comando o una busqueda...'
                />
              </div>

              <div className='categories'>
                <div className='navigation category'>
                  <p>Páginas</p>
                  <Link to={'/'}>
                    <IoHomeOutline />
                    <span>Home</span>
                  </Link>
                  <Link to={'/about'}>
                    <FaRegUser />
                    <span>About</span>
                  </Link>
                  <Link to={'/projects'}>
                    <IoCodeSlashOutline />
                    <span>Projects</span>
                  </Link>
                </div>

                <div className='social_media category'>
                  <p>Redes Sociales</p>
                  <Link to={'https://github.com/Yeremi74'} target='_blank'>
                    <LuGithub />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  )
}
Navbar.propTypes = {
  setSearchActive: PropTypes.bool.isRequired,
  searchActive: PropTypes.bool.isRequired,
  setMobileMenu: PropTypes.bool.isRequired,
  mobileMenu: PropTypes.bool.isRequired
}

export default Navbar
