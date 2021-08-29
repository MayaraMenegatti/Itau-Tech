// Preenchimento dos campos de endereço através do CEP
// https://viacep.com.br/exemplo/javascript/

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('formRua').value = ("");
    document.getElementById('formBairro').value = ("");
    document.getElementById('formCid').value = ("");
    document.getElementById('formUF').value = ("");
    // document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('formRua').value = (conteudo.logradouro);
        document.getElementById('formBairro').value = (conteudo.bairro);
        document.getElementById('formCid').value = (conteudo.localidade);
        document.getElementById('formUF').value = (conteudo.uf);
        // document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado!");
        document.getElementById('formCEP').value = "";
        document.getElementById('formCEP').focus();
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('formRua').value = "...";
            document.getElementById('formBairro').value = "...";
            document.getElementById('formCid').value = "...";
            document.getElementById('formUF').value = "...";
            // document.getElementById('ibge').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
            return cep;

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("CEP inválido!");
            return false;
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};