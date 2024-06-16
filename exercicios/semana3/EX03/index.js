const btn = document.getElementById('onclick')

btn.addEventListener('click', () => {
    const name = window.prompt('Digite seu nome:');
    if (name) {
        const confirmacao = window.confirm('Deseja continuar?');
        if (confirmacao) {
            window.alert('Continuando')
        } else {
            window.alert('Operação encerrada')
        }
    } else {
        window.alert('ERROR')
    }
})