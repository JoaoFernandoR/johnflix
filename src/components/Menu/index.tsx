import React from 'react'
import Logo from '../../assets/images/logo2.png'
// Components
import ButtonLink from '../../shared/ButtonLink'
// CSS
import './Menu.scss'

const Menu:React.FC = () => {
    return (
        <section id="menu">
            <a href="/">
                <img src={Logo} alt="JohnFlix Logo"/>
            </a>
            <ButtonLink href="/" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
        </section>
    )
}

export default Menu