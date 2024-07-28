import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css'
import logo from './ze.png'

function Signin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        if (email === 'admin@admin.com' && senha === 'admin123') {
            // redireciona para a home
            navigate('/home')
            return
        }

        alert('Email e/ou senha incorretos')
    }

    return (
        <>
            <div className="p-Login">
                <div className='f-Login'>
                    <img src={logo} alt="logo zé delivery" />
                    <h6>Insira seu email para login:</h6>

                    <form onSubmit={handleSubmit}>

                        <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <button type="submit" className='btn'>ENTRAR</button>

                    </form>

                    <h6>Precisa de ajuda? Entre no <a href="#">Me ajuda, Zé!</a></h6>
                </div>
            </div>
        </>
    )
}

export default Signin