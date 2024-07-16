import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer">

                <div className="footer-container">

                    <div className="f-img">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" width="136" height="32" alt="Bikcraft"></img>
                    </div>

                    <div className="footer-info">
                        <ul className='ul-info'>
                            <h3>CONTATO</h3>
                            <li>+55 21 9999-9999</li>
                            <li>Rua Ali Perto, 42-Botafogo</li>
                            <li>Rio de Janeiro-RJ</li>
                        </ul>

                        <div className="footer-redes">
                            <a href="/"></a>
                            <a href="/"></a>
                            <a href="/"></a>
                        </div>
                    </div>

                    <div className="footer-info">
                        <ul className='ul-info'>
                            <h3>INFORMAÇÕES</h3>
                            <li>Bicicletas</li>
                            <li>Seguros</li>
                            <li>Contato</li>
                            <li>Termos e Condições</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer