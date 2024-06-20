const sobre = document.querySelector('#sobre')
const trailer = document.querySelector('#trailer')
const atores = document.querySelector('#personagem')
const avaliacoes = document.querySelector('#avaliacao')

sobre.addEventListener('click', () => {
    window.alert('Página em construção')
})
trailer.addEventListener('click', () => {
    window.alert('Página em construção')
})
atores.addEventListener('click', () => {
    window.alert('Página em construção')
})
avaliacoes.addEventListener('click', () => {
    window.alert('Página em construção')
})

const episodios = [
    {
        id: 1,
        episodio: 'T1-01',
        tempo: '24min'
    },
    {
        id: 2,
        episodio: 'T1-02',
        tempo: '24min'
    },
    {
        id: 3,
        episodio: 'T1-03',
        tempo: '24min'
    }
]
const listaEP = document.getElementById('lista-ep')

episodios.forEach(episodios => {
    const cardEP = document.createElement('div')
    cardEP.className = 'box-epsodio'
    cardEP.innerHTML = `

    <div class="inf-eps">
    <span>${episodios.episodio}</span>
    <span>${episodios.tempo}</span>
    </div>

    <span class="img-play" id="play-${episodios.id}">
    <img src="src/img/botao-play.png" alt="dar play no episodio">
    </span>
    `
    listaEP.appendChild(cardEP)
})

episodios.forEach(episodio => {
    const botaoPlay = document.getElementById(`play-${episodio.id}`)
    botaoPlay.addEventListener('click', () => {
        alert(`Você clicou no ep: ${episodio.episodio}`)
    })
})