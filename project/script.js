// Code 
const userid = document.getElementById('idemail');
const passwordId = document.getElementById('idpassword');
const verficacao = document.getElementById('verficacao');
const buttonForm = document.getElementById('buttonForm');
const img =  document.getElementById('img');


buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
    // Inputs verficados
    const user = userid.value;
    const password = passwordId.value;
    if(user === "" || password === ""){
        verficacao.innerHTML = "Por favor, preencha todos os campos.";
        verficacao.style.color = "red";
        verficacao.style.fontWeight = "bolder";
        verficacao.style.textAlign = "center";
        img.style.height = "71%";
    }else{
        verficacao.innerHTML = "Login realizado com sucesso! 🎉";
        verficacao.style.color = "green";
        verficacao.style.fontWeight = "bolder";
        verficacao.style.textAlign = "center";
        img.style.height = "71%";
    }

    userid.value = "";
    passwordId.value = "";
});