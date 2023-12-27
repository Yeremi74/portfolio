import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <Link to={'https://github.com/Yeremi74'} target='_blank'>
        <span>GitHub</span>
      </Link>
    </footer>
  )
}

export default Footer
