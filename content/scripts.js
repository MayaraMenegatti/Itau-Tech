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
    document.getElementById('formNome').innerText = urlParams.get('nome');
    document.getElementById('formCPF').textContent = urlParams.get('cpf');
    document.getElementById('formRG').textContent = urlParams.get('rg');
    document.getElementById('formE-mail').textContent = urlParams.get('e-mail');
    document.getElementById('formTel').textContent = urlParams.get('tel');
    document.getElementById('formCel').textContent = urlParams.get('cel');
    if (urlParams.get('nasc')) {
        const data = new Date(urlParams.get('nasc'));
        document.getElementById('formNasc').textContent = data.toLocaleDateString('pt-Br', { timeZone: 'UTC', dateStyle: 'long' });
    }
    if (urlParams.get('sexo') == 'M') {
        document.getElementById('formSexo').textContent = 'masculino';
    } else {
        document.getElementById('formSexo').textContent = 'feminino';
    }
    document.getElementById('formCivil').textContent = urlParams.get('civil');
    document.getElementById('formCEP').textContent = urlParams.get('cep');
    document.getElementById('formRua').textContent = urlParams.get('rua');
    document.getElementById('formNum').textContent = urlParams.get('num');
    document.getElementById('formComp').textContent = urlParams.get('comp');
    document.getElementById('formBairro').textContent = urlParams.get('bairro');
    document.getElementById('formCid').textContent = urlParams.get('cid');
    document.getElementById('formUF').textContent = urlParams.get('uf');
    document.getElementById('formObs').textContent = urlParams.get('obs');
}