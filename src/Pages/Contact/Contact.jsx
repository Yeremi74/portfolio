import { Link } from 'react-router-dom'
import './contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaRegCheckCircle } from 'react-icons/fa'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [alert, setAlert] = useState(false)

  const refForm = useRef()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const serviceId = 'service_3hqtlbc'
  const templateId = 'template_8sf6ql6'
  const apiKey = '3JF_TnNQxhT9mU85s'

  const handleSubmit = e => {
    e.preventDefault()

    // Restablecer los errores
    setNameError('')
    setEmailError('')
    setMessageError('')

    // Comprobar si los campos están vacíos
    if (!name) {
      setNameError('Este campo es obligatorio')
    }

    if (!email) {
      setEmailError('Este campo es obligatorio')
    } else if (!emailRegex.test(email)) {
      setEmailError('Por favor, proporciona un correo electrónico válido')
    }

    if (!message) {
      setMessageError('Este campo es obligatorio')
    }

    // Si no hay errores, enviar el formulario
    if (name && email && message && emailRegex.test(email)) {
      console.log('beta enviado con exitos')
      emailjs
        .sendForm(serviceId, templateId, refForm.current, apiKey)
        .then(result => console.log(result.text))
        .catch(error => console.log(error))
      setAlert(true)
      console.log(alert)
      setTimeout(() => {
        setAlert(false)
        console.log(alert)
      }, 3000)
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <main className='contact_container'>
      <div className='info_contact'>
        <h2>Contactame.</h2>
        <p>
          Aquí está cómo pueden contactarme, ¡estoy ansioso por hablar con
          usted!
        </p>
        <p>
          Consultas por correo electrónico a {''}
          <a href='mailto:yyeremi15@gmail.com'>yyeremi15@gmail.com</a> o a
          través de las redes sociales:
        </p>
        <ul>
          <li>
            Github-
            <Link to={'https://github.com/Yeremi74'} target='_blank'>
              https://github.com/Yeremi74
            </Link>
          </li>
        </ul>
        <span>
          Ver mi CV en{' '}
          <a
            href='https://yeremigonzalez-portfolio.netlify.app/CV Yeremi Gonzalez2.pdf'
            download='CV Yeremi Gonzalez'
          >
            formato PDF
          </a>
        </span>
      </div>

      <form onSubmit={handleSubmit} ref={refForm}>
        {alert && (
          <div className='alert'>
            <FaRegCheckCircle />
            Correo enviado correctamente
          </div>
        )}
        <div className='form_content'>
          <div className='text'>
            <label>
              <input
                name='name'
                type='text'
                placeholder='Ingresa tu nombre'
                value={name}
                onChange={e => {
                  setName(e.target.value)
                  setNameError('')
                }}
              />
              {nameError && <p className='error__message'>{nameError}</p>}
            </label>
            <label>
              <input
                name='email_id'
                type='text'
                placeholder='Ingresa tu email'
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  setEmailError('')
                }}
              />
              {emailError && <p className='error__message'>{emailError}</p>}
            </label>
          </div>
          <label>
            <textarea
              id=''
              cols='30'
              rows='10'
              placeholder='Tu mensaje...'
              name='message'
              value={message}
              maxLength={500}
              onChange={e => {
                setMessage(e.target.value)
                setMessageError('')
              }}
            ></textarea>
            {messageError && <p className='error__message'>{messageError}</p>}
          </label>
        </div>

        <input type='submit' value='ENVIAR' />
      </form>
    </main>
  )
}

export default Contact
