function validateType(){
    var tipo = document.querySelector('select#select-type').value //Variavel de entrada
    var feedbackTipo = document.querySelector('div#feedback-tipo') //Variavel de feedback
    feedbackTipo.innerHTML = '' //Limpar feedback

    if(tipo === '0'){ //Verificar se for selecionado
        feedbackTipo.innerHTML += 'Selecione uma movimentação.' //Feedback visual
        document.getElementById('select-type').focus() //Foca no campo de tipo
        var hasError = true;
        return hasError;
    }
}

function validateOrigin(){
    var origem = document.querySelector('select#select-origem').value //Variavel de entrada
    var feedbackOrigem = document.querySelector('div#feedback-origem') //Variavel de feedback
    feedbackOrigem.innerHTML = '' //Limpar feedback

    if(origem === '0'){ //Verificar se foi selecionado
        feedbackOrigem.innerHTML += 'Selecione a origem' //Feedback visual
        document.getElementById('select-origem').focus() //Foca no campo de origem
        var hasError = true;
        return hasError;
    }
}

function validateDescription(){
    var descricao = document.querySelector('textarea#txt-desc').value //Variavel de entrada
    var feedbackDescricao = document.querySelector('div#feedback-descricao') //Variavel de feedback
    feedbackDescricao.innerHTML = '' //Limpar feedback

        //Sanitição de descrição
    descricao = descricao.trim() //Remover espaços em branco no começo e no final
    var descricaoArray = descricao.split(' ') //Divide a string em um array, separado um espaço em branco
    var descricaoSanitizado = '' //Cria variavel para descrição tratada

    for(const indice in descricaoArray){ //Para cada 'indice' em descricaoArray faça
        if(descricaoArray[indice] != ''){ //Se o valor do indice for *diferente* de 'vazio' faça
            descricaoSanitizado = descricaoSanitizado + ' ' + descricaoArray[indice] //Descrição irá se concatenar um espaço vazio o indice válido, deixará um espaço em branco no começo
        }
    }
    descricaoSanitizado = descricaoSanitizado.trim() //Remove o espaço em branco no começo 

    var descricaoSanitizadoArray = descricaoSanitizado.split(' ') //Cria array tratado

        //Validação
        
    if(descricaoSanitizado.length < 8 || descricaoSanitizadoArray.length < 2){ //Se houver menos de cinco caracteres ou menos de duas palavras
        feedbackDescricao.innerHTML += 'Descrição insuficiente' //Feedback visual
        document.getElementById('txt-desc').focus() //Foca no campo de descrição
        var hasError = true;
        return hasError
    }
    
    var charEspecial = /[!@#$%^&*()_+\-=\[\]{}¹²³£¢¬;':"\\|,.<>\/?]/ //Cria uma cadéia contendo caracteres especiais
    if(descricaoSanitizado.match(charEspecial)){ //Se houver caracteres especial
        feedbackDescricao.innerHTML += 'Possui caracteres inválidos' //Retorno visual
        document.getElementById('txt-desc').focus() //Foca no campo descrição
        var hasError = true;
        return hasError
    }
}

function validateValue(){
    var valor = document.querySelector('input#input-valor').value //Variavel de entrada
    var feedbackValor = document.querySelector('div#feedback-valor') //Variavel de feedback
    feedbackValor.innerHTML = '' //Limpar feedback

    if(valor.length === 0){ //Se valor estiver vazio
        feedbackValor.innerHTML += "Valor não pode estar vazio" //Retorno visual
        document.getElementById('input-valor').focus() //Foca no campo valor
        var hasError = true;
        return hasError
    }else if(Number(valor) < 0){ //Se valor for menor que Zero
        feedbackValor.innerHTML += "Valor não pode ser negativo" //Retorno visual
        document.getElementById('input-valor').focus() //Foca no campo valor
        var hasError = true;
        return hasError
    }else if(Number(valor) === 0){ //Se valor for igual a Zero
        feedbackValor.innerHTML += "Valor não pode ser zero" //Retorno visual
        document.getElementById('input-valor').focus() // Foca no campo valor
        var hasError = true;
        return hasError
    }else if(Number(valor) > 99999.99){ //Se valor for muito alto
        feedbackValor.innerHTML += "Valor acima do limite" //Retorno visual
        document.getElementById('input-valor').focus() //Foca no campo valor
        var hasError = true;
        return hasError
    }
}

function validateDueDate(){
    var dataVencimento = document.querySelector('input#data-venc').value //Variavel de entrada
    var feedbackDataVencimento = document.querySelector('div#feedback-data-venc') //Variavel de feedback
    feedbackDataVencimento.innerHTML = '' //Limpar feedback

    if(dataVencimento.length === 0){ //Se o campo foi preenchido
        feedbackDataVencimento.innerHTML += "Digite a data de vencimento" //Retorno visual
        document.getElementById('data-venc').focus() //Foca no campo data de vencimento
        var hasError = true;
        return hasError
    }
}

function validateSettlementDate(){
    var dataLiquidacao = document.querySelector('input#data-liq').value //Variavel de entrada
    var feedbackDataLiquidacao = document.querySelector('div#feedback-data-liq') //Variavel de feedback
    feedbackDataLiquidacao.innerHTML = '' //Limpar feedback

    if(dataLiquidacao.length === 0){ //Se o campo foi preenchido 
        feedbackDataLiquidacao.innerHTML += "Digite a data de liquidação" //Retorno visual
        document.getElementById('data-liq').focus() //Foca no campo data de liquidação
        var hasError = true;
        return hasError
    }
}

function validate(){

    var hasError = false;

    //Validar Tipo

    hasError = validateType()
    
    //Validar Origem

    hasError = validateOrigin()

    //Validar Descrição

    hasError = validateDescription()    

    //Validar Valor

    hasError = validateValue()
    
    //Validar Data de vencimento

    hasError = validateDueDate()

    //Validar Data de liquidação

    hasError = validateSettlementDate()

    if(!hasError)
    return true;
    
    return false;
}