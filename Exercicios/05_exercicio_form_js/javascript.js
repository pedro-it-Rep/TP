  function cleanForm() {

    if(confirm('Tem Certeza que deseja limpar o formulario?')) {

       document.formulario.reset()
    }
}

function submitForm() {
    let erro = 0;
    /* Verificar o tamanho do nome */
    if(document.formulario.nome.value.length < 3) {
        alert('Insira um nome valido')
        document.formulario.nome.value = ''
        erro++;
    } else {
        document.formulario.nome.value = document.formulario.nome.value.toUpperCase();
    }

    /* Verificar o estado civil */
    if(document.formulario.estadoCivil.value == "") {
        document.getElementById('error').innerHTML = "Selecione um estado civil válido!"
        document.getElementById('error').style.color = "red"
        document.getElementById('error').style.fontFamily = "Playfair Display"
        document.getElementById('error').style.fontWeight = "bold"
        document.getElementById('error').style.fontSize = "16px"
    } 

    /* Verifica Campo Objetivo */ 
    if(document.formulario.objetivo == "") {
        alert("Campo de Objetivo não Preenchido!")
        erro++;
    } else {
        document.formulario.objetivo.value = document.formulario.objetivo.value.toLowerCase();
    }

    if(document.formulario.tel.value == "" && document.formulario.email.value == "") {
        alert("Por favor, informe seu telefone ou email")
        erro++;
    }

    if(document.formulario.english.value == "") {
        alert("Por favor, coloque um nível de Inglês")
        erro++;
    }

    if(document.formulario.spanish.value == "") {
        alert("Por favor, coloque um nível de Espanhol")
        erro++;
    }

    let checkTrue = 0;
    for (let i = 0; i < document.formulario.PL.length; i++) {
        if (document.formulario.PL[i].checked)
        checkTrue++;
    }

    if(checkTrue == 0) {
        if(erro == 0) {
            if(confirm("Deseja enviar o formulário sem nenhuma linguagem de programação selecionada?")) {
                document.formulario.submit();
            }
        } else {
            alert("Dados Inválidos")
        }
    } else {
        if(erro == 0) {
            document.formulario.submit();
        } else {
            alert("Dados Inválidos")
        }
    }
    
    
}
