//CONFIRMAÇÃO SE USUÁRIO ESTÁ LOGADO NO SISTEMA
var selectedRow = null;
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

 //CHAMADA DO NOME DO USUÁRIO NA PÁGINA
logado.innerHTML = `Olá ${userLogado.nome},`

//SE USUÁRIO NÃO ESTIVER LOGADO
if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página!')
    window.location.href = './home.html'
}


//GERENCIAMENTOS DE CADASTRO PARA USUÁRIO LOGADO NO SISTEMA (CRUD)//

//ALERTAS DE CADASTROS
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
}
//LIMPAR CADASTRO
function limparLista(){
    document.querySelector("#descricao").value = "";
    document.querySelector("#detalhamento").value = "";
    document.querySelector("#prioridade").value = "";
}
//ADICIONAR NOVO CADASTRO
    document.querySelector("#formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    //BUSCAR VALORES NO HTML
    const descricao = document.querySelector("#descricao").value;
    const detalhamento = document.querySelector("#detalhamento").value;
    const prioridade = document.querySelector("#prioridade").value;

    //VALIDAÇÃO DE CADASTRO
    if(descricao == "" || detalhamento == "" || prioridade == ""){
        showAlert("Favor preencher todos os campos!", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#lista");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${descricao}</td>
                <td>${detalhamento}</td>
                <td>${prioridade}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
                <a href="#" class="btn btn-danger btn-sm delete">Deletar</a>       
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Atividade adicionada com sucesso!", "info");
        }
        else{
            selectedRow.children[0].textContent = descricao;
            selectedRow.children[1].textContent = detalhamento;
            selectedRow.children[2].textContent = prioridade;
            selectedRow = null;
            showAlert("A Atividade foi Editada!", "info");
        }
        limparLista();
    }
})
//EDITAR UM CADASTRO
document.querySelector("#lista").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#descricao").value = selectedRow.children[0].textContent;
        document.querySelector("#detalhamento").value = selectedRow.children[1].textContent;
        document.querySelector("#prioridade").value = selectedRow.children[2].textContent;        
    }
})
//DELETAR UM CADASTRO
document.querySelector("#lista").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Atividade Deletada com sucesso!", "info");
    }
})
//LOGOUT DO SISTEMA
function sair(){
    localStorage.removeItem('token')
    window.location.href = './home.html'
}