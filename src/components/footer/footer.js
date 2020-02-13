import React from "react"

const Footer = () => (
  <footer>
    <div className="footer-container">
      <Contacto />
      <Contenido />
      <Idiomas />
    </div>
  </footer>
)

const Contacto = () => (
  <div className="footer-title">
    ¿Preguntas? Llama al
    <a
      className="margin-left-xs"
      href="900 866 616"
      alt="Teléfono de contacto de Netflix"
    >
      900 866 616
    </a>
  </div>
)

const Contenido = () => (
  <div className="footer-content">
    <div>
      <p>Preguntas frecuentes</p>
      <p>Inversores</p>
      <p>Formas de ver</p>
      <p>Información corporativa</p>
      <p>Originales de Netflix</p>
    </div>
    <div>
      <p>Centro de ayuda</p>
      <p>Empleo</p>
      <p>Términos de uso</p>
      <p>Contáctanos</p>
    </div>
    <div>
      <p>Cuenta</p>
      <p>Canjear tarjetas regalo</p>
      <p>Privacidad</p>
      <p>Prueba de velocidad</p>
    </div>
    <div>
      <p>Zona de prensa</p>
      <p>Comprar tarjetas regalo</p>
      <p>Preferencias de cookies</p>
      <p>Avisos legales</p>
    </div>
  </div>
)

const Idiomas = () => (
  <select name="select-languages" className="margin-top-m select-languages">
    <option className="select-languages--option" value="espanol" selected>
      Español
    </option>
    <option value="ingles">Inglés</option>
  </select>
)

export default Footer
