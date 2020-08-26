import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './Cadastro.scss'

const Cadastro = () => {
    return (
        <section id="cadastro">
            <Link to='categoria'>
                Ir para categoria
            </Link>
        </section>
    )
}

export default Cadastro