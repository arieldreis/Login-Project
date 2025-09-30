// Code 
const userid = document.getElementById('idemail');
const passwordId = document.getElementById('idpassword');
const verficacao = document.getElementById('verficacao');
const buttonForm = document.getElementById('buttonForm');

// Inputs verficados
const user = userid.value;
const password = passwordId.value;

buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
    if(user === "" || password === ""){
        verficacao.innerHTML = "Por favor, preencha todos os campos.";
        verficacao.style.color = "red";
        verficacao.style.fontWeight = "bolder";
        verficacao.style.textAlign = "center";
    }
});