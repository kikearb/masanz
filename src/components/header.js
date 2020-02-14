import { Link } from "gatsby"
import React from "react"
import { Menu } from "./menu"
import { UserMenu } from './userMenu'

const Header = () => (
  <header className="header">
    <div className="header__content">
      <div className="header__menu">
        <h1 className="header__logo">
          <Link className="icon icon--big icon--logo" to="/"></Link>
        </h1>
        <Menu />
        {/* <nav className="main-menu">
          <a className="main-menu__option main-menu__option--active">Inicio</a>
          <a className="main-menu__option">Series TV</a>
          <a className="main-menu__option">Películas</a>
          <a className="main-menu__option">Más recientes</a>
          <a className="main-menu__option">Mi lista</a>
        </nav> */}
      </div>
      <UserMenu />
    </div>
  </header>
)

export default Header
