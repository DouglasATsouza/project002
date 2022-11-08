//BUSCAR ID`S DO HTML
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

//ALERTAS DE ERRO/SUCESSO NO CADASTRO
let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

//VALIDAÇÃO DOS CAMPOS DE CADASTRO
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <=2){
        nome.setAttribute('style','border-color: red')
        validNome = false
    }else{
        nome.setAttribute('style','border-color: white')
        validNome = true
    }
})
usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <=4){
        usuario.setAttribute('style','border-color: red')
        validUsuario = false
    }else{
        usuario.setAttribute('style','border-color: white')
        validUsuario = true
    }
})
senha.addEventListener('keyup', ()=>{
    if(senha.value.length <=5){
        senha.setAttribute('style','border-color: red')
        validSenha = false
    }else{
        senha.setAttribute('style','border-color: white')
        validSenha = true
    }
})
confirmSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmSenha.value){
        confirmSenha.setAttribute('style','border-color: red')
        validConfirmSenha = false
    }else{
        confirmSenha.setAttribute('style','border-color: white')
        validConfirmSenha = true
    }
})

//CADASTRO NO JSON
function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        //VALIDAÇÃO NO BANCO DE DADOS
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push({
        
            nomeCadastrado: nome.value,
            userCadastrado: usuario.value,
            senhaCadastrado: senha.value
        }
        ) 
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        //ALERTA DE CONFIRMAÇÃO DO CADASTRO
        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = 'Cadastrando usuário...'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        setTimeout(()=>{

        //CONFIRMAÇÃO DE LOGIN
        window.location.href = './home.html'
        }, 3000)        
        //CADASTRO INCORRETO
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha os campos corretamente!<strong>'        
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
    }
    
}




