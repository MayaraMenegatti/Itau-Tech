// Verifica se é um CPF válido e o formata como dd.ddd.ddd-dd
function ajustaCPF(valor) {

    var formCPF = document.getElementById('formCPF');
    var cpf = valor.replace(/\D/gim, '');

    formCPF.value = cpf;

    if (TestaCPF(cpf)) {
        formCPF.value = cpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
    } else if (cpf) {
        alert("CPF inválido!");
        formCPF.value = "";
        formCPF.focus();
    }
}

// Verifica se é um telefone fixo com DDD (10 dígitos) e o formata como (dd) dddd-dddd
function ajustaTelefone(valor) {

    var formTel = document.getElementById('formTel');
    var tel = valor.replace(/\D/gim, '');

    tel = tel.replace(/^0/, "");
    formTel.value = tel;

    if (tel.length === 10) {
        formTel.value = tel.replace(/^([\d]{2})([\d]{4})([\d]{4})$/, "($1) $2-$3");
    } else if (tel) {
        alert("Telefone fixo inválido!");
        formTel.value = "";
        formTel.focus();
    }
}

// Verifica se é um telefone celular com DDD (11 dígitos) e o formata como (dd) 9dddd-dddd
function ajustaCelular(valor) {

    var formCel = document.getElementById('formCel');
    var cel = valor.replace(/\D/gim, '');

    cel = cel.replace(/^0/, "");
    formCel.value = cel;

    if (cel.length == 11 && cel[2] == '9') {
        formCel.value = cel.replace(/^([\d]{2})([\d]{5})([\d]{4})$/, "($1) $2-$3");
    } else if (cel) {
        alert("Telefone celular inválido!");
        formCel.value = "";
        formCel.focus();
    }
}

// Formata o CEP como dd.ddd-ddd e preenche os demais campos do endereço caso seja válido
function ajustaCEP(valor) {

    var formCEP = document.getElementById('formCEP');
    var cep = valor.replace(/\D/gim, '');

    cep = cep.replace(/^0/, "");
    formCEP.value = cep;

    if (pesquisacep(cep)) {
        formCEP.value = cep.replace(/^([\d]{2})([\d]{3})([\d]{3})$/, "$1.$2-$3");
        document.getElementById('formNum').focus();
    } else if (cep) {
        alert("CEP inválido!");
        formCEP.value = "";
        formCEP.focus();
    }
}

// Carrega as informações enviadas pela página de cadastro
function carregaInformacoes() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    document.getElementById('formNome').innerHTML = urlParams.get('nome');
    document.getElementById('formCPF').innerHTML = urlParams.get('cpf');
    document.getElementById('formRG').innerHTML = urlParams.get('rg');
    document.getElementById('formE-mail').innerHTML = urlParams.get('e-mail');
    document.getElementById('formTel').innerHTML = urlParams.get('tel');
    document.getElementById('formCel').innerHTML = urlParams.get('cel');
    if (urlParams.get('nasc')) {
        const data = new Date(urlParams.get('nasc'));
        document.getElementById('formNasc').innerHTML = data.toLocaleDateString('pt-Br', { timeZone: 'UTC', dateStyle: 'long' });
    }
    if (urlParams.get('sexo') == 'M') {
        document.getElementById('formSexo').innerHTML = 'masculino';
    } else {
        document.getElementById('formSexo').innerHTML = 'feminino';
    }
    document.getElementById('formCivil').innerHTML = urlParams.get('civil');
    document.getElementById('formCEP').innerHTML = urlParams.get('cep');
    document.getElementById('formRua').innerHTML = urlParams.get('rua');
    document.getElementById('formNum').innerHTML = urlParams.get('num');
    document.getElementById('formComp').innerHTML = urlParams.get('comp');
    document.getElementById('formBairro').innerHTML = urlParams.get('bairro');
    document.getElementById('formCid').innerHTML = urlParams.get('cid');
    document.getElementById('formUF').innerHTML = urlParams.get('uf');
    document.getElementById('formObs').innerHTML = urlParams.get('obs');
}