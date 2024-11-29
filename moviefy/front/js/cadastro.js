
//criando funcao assincrona para o cadastro do usuario

async function cadastro(){
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const confirmarEmail = document.getElementById('confirm-email').value
    const senha = document.getElementById('password').value
    const confirmarSenha = document.getElementById('confirm-password').value
    const span = document.getElementById('error')

    if (email !== confirmarEmail){
        span.textContent = 'Os e-mails são diferentes'
        return
    }
    if (senha !== confirmarSenha){
        span.textContent = 'As senhas são diferentes'
        return
    }

    try{
        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nome, email, senha})
        })

        const message = await response.text()
        if(response.ok){
            span.textContent = 'Cadastro realizado'
        }else{
            span.textContent = message //mensagem de erro do servidor
        }
    }catch (error){ 
        span.textContent = 'Erro ao cadastrar'
        console.error(error)
    }

}