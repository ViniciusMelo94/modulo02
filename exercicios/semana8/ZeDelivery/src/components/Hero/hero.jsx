import './hero.css'


function Hero() {
    return (
        <>
            <div className="hero">
                <div className='text'>
                    <h4 className='text-hero'>
                        Bebida rápida,
                        gelada e no precinho?
                    </h4>

                    <h5 className='text-hero'>
                        O Zé entrega tudo.
                    </h5>
                </div>
                <div className='input-div'>
                    <input className="input-hero" type="text" placeholder="Inserir endereço para ver preço" />
                </div>
            </div>
        </>
    )
}



export default Hero