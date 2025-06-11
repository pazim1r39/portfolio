// Número de celular
let numeroWhatsapp = '+5517991885197'

// Função para Mostrar Ocultar Formulário
function toggleForm(){
    let form = document.getElementById('formContato')
    form.classList.toggle('visivel') // Adicione - Remove a classe visivel

    if(form.style.display == 'block'){
        setTimeout(() => document.querySelector('.campo-mensagem').focus(), 50)
        // Set Time Out agenda uma agenção
    }
}

// Mandar Whatsapp
function enviarMensagem(e){
    e.preventDefault() // Impede o comportamento padrão ou seja recarregar a pagina
    let mensagem = document.querySelector('.campo-mensagem').value.trim()
    // Value pega o que a pessoa digitar
    // TRIM remove os espaços em branco no inicio e fim

    if(!mensagem){
        alert('Digite uma mensagem !!!!')
        return
    }

    //Cria um link do whatsapp codificado
    window.open(`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`)

    // encodeURIComponent -> Codificação para Whats  aceitar o texto

    document.getElementById('formContato').reset()//Limpa o formulário
    document.getElementById('formContato').classList.remove('visivel') // Remove a classe

}