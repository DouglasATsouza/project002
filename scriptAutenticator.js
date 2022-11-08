//EFETUAR LOGIN NO SISTEMA
function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let msgError = document.querySelector('#msgError')
    let listaUser = []
    
    let userValid = {
      nome: '',
      user: '',
      senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
      if(usuario.value == item.userCadastrado && senha.value == item.senhaCadastrado){
         
        userValid = {
           nome: item.nomeCadastrado,
           user: item.userCadastrado,
           senha: item.senhaCadastrado
         }
        console.log(userValid)
      }
    })
     
    if(usuario.value == userValid.user && senha.value == userValid.senha){
      window.location.href = './task.html'
      
      let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom
      
      localStorage.setItem('token', token)
      localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuário ou senha incorretos'
      usuario.focus()
    }
    
  }