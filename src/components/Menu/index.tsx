import React from 'react'
import Logo from '../../assets/images/logo2.png'
import { Link } from 'react-router-dom'
// Components
import ButtonLink from '../../shared/ButtonLink'
// CSS
import './Menu.scss'

const Menu:React.FC = () => {
    return (
        <section id="menu">
            <Link to="/">
                <img src={Logo} alt="JohnFlix Logo"/>
            </Link>
            <Link to="/newvideo">
                <ButtonLink href="/" className="ButtonLink">
                    Novo Vídeo
                </ButtonLink>
            </Link>
        </section>
    )
}

export default Menu